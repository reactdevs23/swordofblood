import React, { useContext, useState, useEffect, useRef } from "react";
import Swiper, { Pagination, Autoplay } from "swiper";
import Web3Provider from "../../context/web3provider";
import Localization from "../../context/localization";
import {
  SetGlobalProvider,
  getPresaleContract,
  setNetwork,
  getUSDTContract,
  getUSDCContract,
  getBUSDContract,
  getDAIContract,
  DisconnectProvider,
  GetAccount,
  GetBalance,
} from "../../functions/onchain";
import {
  retrieveSteppedPresaleInfo,
  retrieveAdditionalPresaleInfo,
} from "../../functions/common";
import { config } from "../../functions/config";
import { importAllImages } from "../../functions/common";
import ModalConnectWallet from "../modal-connect-wallet/modal-connect-wallet";
import ModalBuy from "../modal-buy/modal-buy";
import styles from "./banner.module.css";

export default function Banner() {
  const { strings } = useContext(Localization);
  const web3provider = useContext(Web3Provider);
  const [inLoading, setInLoading] = useState(true);
  const [presaleData, setPresaleData] = useState(null);
  const [curStep, setCurStep] = useState(0);
  const [loadingInfoText, setLoadingInfoText] = useState(null);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [purchaseToken, setPurchaseToken] = useState(4);
  const curStepRef = useRef(0);
  const progressLine = useRef(null);
  const images = importAllImages();

  const connectWallet = async () => {
    const thisNetwork = setNetwork(
      process.env.NODE_ENV === "development" ? "BSC" : "ETHEREUM"
    );

    if (!web3provider.current.status) {
      web3provider.current.network = thisNetwork;
      setShowConnectModal(true);
    } else {
      if (
        web3provider.current.instance.constructor.name.toLowerCase() ===
          "jsonrpcprovider" ||
        web3provider.current.instance.constructor.name.toLowerCase() === "r" ||
        thisNetwork !== web3provider.current.network
      ) {
        Disconnect();
        web3provider.current.network = thisNetwork;
        setShowConnectModal(true);
      } else getPrepresaleData(1);
    }
  };

  const getPrepresaleData = async (mode = 0) => {
    if (mode > 0 && !web3provider.current.status) {
      Disconnect();
      return false;
    }

    try {
      setInLoading(true);

      let info = presaleData ? presaleData : {};

      if (mode > 0) {
        info.wallet = await GetAccount(web3provider.current.instance);
        if (!info.wallet) {
          Disconnect();
          return false;
        }
      }

      if (mode === 0) {
        web3provider.current.network = setNetwork(
          process.env.NODE_ENV === "development" ? "BSC" : "ETHEREUM"
        );
        await SetGlobalProvider(2, web3provider);
      }

      let contract = getPresaleContract(web3provider.current.instance);
      if (mode === 0 || mode === 2)
        Object.assign(info, await retrieveSteppedPresaleInfo(contract));
      if (mode >= 1)
        Object.assign(
          info,
          await retrieveAdditionalPresaleInfo(contract, info)
        );

      setPresaleData(info);
      if (mode > 0) setCurStep(1);
      setInLoading(false);
    } catch (err) {
      setInLoading(false);
    }
  };

  const buyTokens = async (amount, purchaseToken) => {
    if (!web3provider.current.status) {
      Disconnect();
      return false;
    }

    if (
      amount < presaleData.minimumBuyAmount ||
      amount > presaleData.tokensLeft
    ) {
      if (presaleData.tokensLeft > presaleData.minimumBuyAmount)
        alert(
          strings.minimumPurchWarn
            .replace(
              `{VALUE1}`,
              presaleData.minimumBuyAmount.toLocaleString("en-US")
            )
            .replace(`{VALUE2}`, presaleData.tokensLeft.toLocaleString("en-US"))
        );
      else {
        if (amount > presaleData.tokensLeft)
          alert(
            strings.minimumPurchWarn2.replace(
              "{VALUE1}",
              presaleData.tokensLeft.toLocaleString("en-US")
            )
          );
      }

      setInLoading(false);
      return false;
    }

    let address = await GetAccount(web3provider.current.instance);
    if (!address) {
      Disconnect();
      return false;
    }

    setShowBuyModal(false);

    purchaseToken = parseInt(purchaseToken);
    let contract = getPresaleContract(web3provider.current.instance, true);
    let balance = await GetBalance(web3provider.current.instance);
    let gas = 0;
    let price = 0;
    let tokenContract;
    let allowance = 0;

    if (purchaseToken === 4) {
      //If Ether
      price = await contract.getEthAmount(amount);
    } else {
      //If stablecoin
      price = await contract.getTokenAmount(amount, purchaseToken);
      if (purchaseToken === 0) {
        tokenContract = getUSDTContract(web3provider.current.instance, true);
      } else if (purchaseToken === 1) {
        tokenContract = getUSDCContract(web3provider.current.instance, true);
      } else if (purchaseToken === 2) {
        tokenContract = getBUSDContract(web3provider.current.instance, true);
      } else if (purchaseToken === 3) {
        tokenContract = getDAIContract(web3provider.current.instance, true);
      }
    }

    try {
      if (purchaseToken === 4) {
        gas = await contract.estimateGas.buyWithEth(amount, {
          from: address,
          value: price,
        });
      } else {
        const balance = await tokenContract.balanceOf(address);
        if (parseInt(balance) < parseInt(price))
          throw new Error("insufficient funds");

        allowance = await tokenContract.allowance(
          address,
          config.presaleAddress
        );

        if (parseInt(allowance) < parseInt(price)) {
          let actualPrice = price;

          //Fix for USDT
          if (purchaseToken === 0 && parseInt(allowance) > 0) actualPrice = 0;

          gas = await tokenContract.estimateGas.approve(
            config.presaleAddress,
            actualPrice,
            {
              from: address,
            }
          );
        }
      }
    } catch (err) {
      if (err.reason && err.reason.indexOf(strings.invalidTime) > -1) {
        alert(strings.presaleInactive);
      } else if (
        (err.data &&
          err.data.message &&
          err.data.message.indexOf("insufficient funds") > -1) ||
        (err.message && err.message.indexOf("insufficient funds") > -1)
      ) {
        alert(strings.insufFunds);
      } else alert(strings.impossToTx);

      setInLoading(false);
      await getPrepresaleData(2);
      return false;
    }

    let neededPrice =
      purchaseToken === 4 ? parseInt(price) + parseInt(gas) : parseInt(gas);

    if (parseInt(balance) < neededPrice) {
      alert(strings.insufFunds);
      setInLoading(false);
      await getPrepresaleData(2);
      return false;
    }

    //Is allowance is enough to make a transaction
    if (purchaseToken < 4) {
      if (parseInt(allowance) < parseInt(price)) {
        try {
          //Fix for USDT
          if (purchaseToken === 0 && parseInt(allowance) > 0) {
            const receipt = await tokenContract.approve(
              config.presaleAddress,
              0
            );
            if (receipt.hash) setLoadingInfoText(strings.stayAndWait);
            await receipt.wait();
          }

          const receipt = await tokenContract.approve(
            config.presaleAddress,
            price
          );
          if (receipt.hash) setLoadingInfoText(strings.stayAndWait);
          await receipt.wait();
          setLoadingInfoText(null);
        } catch (err) {
          setLoadingInfoText(null);
          setInLoading(false);
          await getPrepresaleData(2);
          return false;
        }
      }

      //Check for issues on stablecoins contract
      try {
        gas = await contract.estimateGas.buyWithUSD(amount, purchaseToken, {
          from: address,
        });
      } catch (err) {
        if (err.reason && err.reason.indexOf(strings.invalidTime) > -1) {
          alert(strings.presaleInactive);
        } else if (
          err.data &&
          err.data.message &&
          err.data.message.indexOf("insufficient funds") > -1
        ) {
          alert(strings.insufFunds);
        } else alert(strings.impossToTx);
        setInLoading(false);
        await getPrepresaleData(2);
        return false;
      }

      if (parseInt(balance) < parseInt(gas)) {
        alert(strings.insufFunds);
        setInLoading(false);
        await getPrepresaleData(2);
        return false;
      }
    }

    //Buying the token
    try {
      let receipt;

      if (purchaseToken === 4) {
        receipt = await contract.buyWithEth(amount, {
          from: address,
          value: price,
        });
      } else {
        receipt = await contract.buyWithUSD(amount, purchaseToken, {
          from: address,
        });
      }

      if (receipt.hash) {
        let info = presaleData;
        info.statusText = strings.thankYou;
        setPresaleData(info);
        setCurStep(2);
      } else {
        alert(strings.goesWrong);
        await getPrepresaleData(2);
      }
    } catch (err) {
      if (err.reason && err.reason.indexOf(strings.tokPayFailed) > -1) {
        alert(strings.insufFunds);
      }
      await getPrepresaleData(2);
    }

    setInLoading(false);
  };

  const claimTokens = async () => {
    if (!web3provider.current.status) {
      Disconnect();
      return false;
    }

    if (presaleData.tokensBoughtByUser <= 0) {
      alert(strings.claimNoFunds);
      setInLoading(false);
      return false;
    }

    let address = await GetAccount(web3provider.current.instance);
    if (!address) {
      Disconnect();
      return false;
    }

    let contract = getPresaleContract(web3provider.current.instance, true);
    let balance = await GetBalance(web3provider.current.instance);
    let gas = 0;

    try {
      gas = await contract.estimateGas.claim({
        from: address,
      });
    } catch (err) {
      if (
        (err.reason && err.reason.indexOf("insufficient funds") > -1) ||
        (err.data &&
          err.data.message &&
          err.data.message.indexOf("insufficient funds") > -1)
      ) {
        alert(strings.insufFunds);
      } else alert(strings.impossToTx);
      setInLoading(false);
      return false;
    }

    if (parseInt(balance) < parseInt(gas)) {
      alert(strings.insufFunds);
      setInLoading(false);
      return false;
    }

    try {
      let receipt = await contract.claim({
        from: address,
      });

      if (receipt.hash) {
        let info = presaleData;
        info.statusText = strings.statClaimed;
        setPresaleData(info);
        setCurStep(2);
      } else {
        alert(strings.goesWrong);
      }
    } catch (err) {
      setInLoading(false);
      return false;
    }

    setInLoading(false);
  };

  const Disconnect = () => {
    DisconnectProvider(web3provider);
    setCurStep(0);
    setInLoading(false);
  };

  useEffect(() => {
    if (!inLoading && (presaleData || curStep >= 1)) {
      setTimeout(() => {
        progressLine.current.style.width =
          progressLine.current.getAttribute("data-done") + "%";
        progressLine.current.style.opacity = 1;
      }, 100);
    }
  }, [presaleData, curStep, inLoading]);

  useEffect(() => {
    curStepRef.current = curStep;
  }, [curStep]);

  useEffect(() => {
    const swiper = new Swiper(".mainBanner", {
      modules: [Pagination, Autoplay],
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    if (window && window.ethereum) {
      window.ethereum.on("chainChanged", (chainIdHex) => {
        if (chainIdHex !== config[web3provider.current.network].chainIdHex)
          Disconnect();
      });

      window.ethereum.on("accountsChanged", async () => {
        if (
          !web3provider.current.status ||
          !(await GetAccount(web3provider.current.instance))
        )
          Disconnect();
        else if (curStepRef.current === 1) await getPrepresaleData(2);
      });
    }

    getPrepresaleData(0);

    return () => {
      swiper.destroy();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      web3provider.current.status = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={["swiper", "mainBanner", styles.banner].join(" ")}>
        <div className={["swiper-wrapper", styles.heroSection].join(" ")}>
          <div className="swiper-slide">
            <img
              src={images["home/banner/banner1.jpg"]}
              alt="#"
              className={["image", styles.image].join(" ")}
            />
          </div>
          <div className="swiper-slide">
            <img
              src={images["home/banner/banner2.jpg"]}
              alt="#"
              className={["image", styles.image].join(" ")}
            />
          </div>
          <div className="swiper-slide">
            <img
              src={images["home/banner/banner3.jpg"]}
              alt="#"
              className={["image", styles.image].join(" ")}
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div
          className={[
            styles.connectWalletContainer,
            curStep === 1 ? styles.step1 : "",
          ].join(" ")}
        >
          <div
            className={[
              styles.presaleWrapper,
              inLoading ? styles.loading : styles.completed,
            ].join(" ")}
          >
            {!inLoading && presaleData && (curStep === 0 || curStep === 1) && (
              <>
                <div className={styles.presaleAndText}>
                  <img
                    src={images["home/presale.png"]}
                    alt="#"
                    className={styles.presaleImage}
                  />
                  <div className={styles.presaleTextAndAmount}>
                    <span
                      className={`text ${styles.titleText}`}
                      style={{ textTransform: "uppercase" }}
                    >
                      {strings.presaleStage}{" "}
                      {/* {presaleData.currentStage >= presaleData.totalPeriods ? presaleData.totalPeriods : presaleData.currentStage + 1}*/}{" "}
                    </span>
                    <span className={styles.amountAndText}>
                      1 {config.tokenSymbol} = {presaleData.currentPrice} USDT
                    </span>
                  </div>
                </div>
                {/* {presaleData.nextPrice ? ( */}
                <p className={styles.info}>
                  {strings.buyBefore
                    .replace("{STAGE}", presaleData.currentStage + 2)
                    .replace("{PRICE}", presaleData.nextPrice)}
                </p>
                {/* ) : (
                  <p className={styles.info}>{strings.buyBeforeTheEnd}</p>
                )} */}
                <div className={styles.progress}>
                  <div
                    ref={progressLine}
                    className={styles.progressDone}
                    data-done={parseInt(presaleData.stagePercentsCompleted)}
                  ></div>
                </div>
                <div className={styles.amountContainer}>
                  <p className={styles.amountTextAndAmountNumber}>
                    <span className={styles.amountText}>{strings.soldTtl}</span>
                    <span className={styles.amountNumber}>
                      {presaleData.totalTokensSold.toLocaleString("en-US")} /{" "}
                      {presaleData.stageTotalTokensTarget.toLocaleString(
                        "en-US"
                      )}
                    </span>
                  </p>
                  <p className={styles.amountTextAndAmountNumber}>
                    <span className={styles.amountText}>
                      {strings.raisedTtl}
                    </span>
                    <span className={styles.amountNumber}>
                      ${presaleData.totalUSDraised.toLocaleString("en-US")} / $
                      {presaleData.stageTotalUSDTarget.toLocaleString("en-US")}
                    </span>
                  </p>
                  {curStep === 1 && (
                    <p className={styles.amountTextAndAmountNumber}>
                      <span className={styles.amountText}>
                        {strings.youOwn}
                      </span>
                      <span className={styles.amountNumber}>
                        {presaleData.tokensBoughtByUser.toLocaleString("en-US")}{" "}
                        {config.tokenSymbol}
                      </span>
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
          {/* {!inLoading && presaleData && curStep === 0 && ( */}
          <button onClick={connectWallet} className={styles.connectWallet}>
            {strings.connectWallet}
          </button>
          {/* )} */}
          {!inLoading && presaleData && curStep === 1 && (
            <>
              {!presaleData.buyBtnDisabled ? (
                <div className={styles.buyingMethod}>
                  <button
                    onClick={() => {
                      setPurchaseToken(4);
                      setShowBuyModal(true);
                    }}
                    className={styles.buyingButton}
                  >
                    {strings.buyWith} ETH
                  </button>
                  <button
                    onClick={() => {
                      setPurchaseToken(0);
                      setShowBuyModal(true);
                    }}
                    className={styles.buyingButton}
                  >
                    {strings.buyWith} USDT
                  </button>
                  <button
                    onClick={() => {
                      setPurchaseToken(1);
                      setShowBuyModal(true);
                    }}
                    className={styles.buyingButton}
                  >
                    {strings.buyWith} USDC
                  </button>
                  <button
                    onClick={() => {
                      setPurchaseToken(3);
                      setShowBuyModal(true);
                    }}
                    className={styles.buyingButton}
                  >
                    {strings.buyWith} DAI
                  </button>
                </div>
              ) : (
                <button
                  onClick={async () => {
                    setInLoading(true);
                    await claimTokens();
                  }}
                  className={styles.connectWallet}
                >
                  {strings.claimTokens}
                </button>
              )}
            </>
          )}
          {!inLoading && curStep === 2 && (
            <span className={styles.statusText}>{presaleData.statusText}</span>
          )}
          {inLoading && loadingInfoText && (
            <span className={styles.loadingInfoText}>{loadingInfoText}</span>
          )}
        </div>
      </div>
      <ModalConnectWallet
        showModal={showConnectModal}
        setShowModal={setShowConnectModal}
        afterConnect={() => getPrepresaleData(1)}
      />
      {presaleData && (
        <ModalBuy
          showModal={showBuyModal}
          setShowModal={setShowBuyModal}
          purchaseToken={purchaseToken}
          presaleData={presaleData}
          buyAction={async (amount) => {
            setInLoading(true);
            await buyTokens(amount, purchaseToken);
          }}
        />
      )}
    </>
  );
}
