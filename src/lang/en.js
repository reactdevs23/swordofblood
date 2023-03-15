import { config } from "../functions/config";

export default function Strings() {
  return {
    tokenAddress: "TOKEN ADDRESS",
    logoTitle: "Logo",
    aboutTtl: "About",
    wpTtl: "Whitepaper",
    allocTtl: "Token Allocation",
    deckTtl: "Pitchdeck",
    presaleTtl: "Pre-Sale",
    rmTtl: "Roadmap",
    auditTtl: "Audit",
    projectTtl: "Project",
    quickLinksTtl: "Quick links",
    privPolicy: "Privacy Policy",
    termsAndConds: "Terms and Conditions",
    amlPolicy: "Anti-Money Laundering Policy",
    salePolicy: `${config.tokenSymbol} Sale Terms and Conditions`,
    descText1:
      "Save the realm from anarchy in this immersive, mobile Action RPG! Fight enemies from the ancient underworld using magic spells and fierce iron weapons! Follow our socials to stay updated!",
    descText2:
      "Copyright © {YEAR} Hitbox Holdings SVG LLC, a St Vincent Corporation",
    descText3:
      "Suite 305 Griffith Corporate Centre, Kingstown, St Vincent, and the Grenadines.",
    quickLinks: "Quick links",
    // presaleStage: 'Presale stage',
    presaleStage: "PRESALE 1 is live!",

    // buyBeforeTheEnd: "Hurry before the end of presale!",
    buyBeforeTheEnd: "Please wait for announcements",
    buyBefore: "Hurry before stage {STAGE} price will increases to {PRICE}!!",
    soldTtl: "Sold",
    raisedTtl: "Raised",
    connectWallet: "Connect Wallet",
    minimumPurchWarn: `Purchase amount must be not less than {VALUE1} ${config.tokenSymbol} and no more than {VALUE2} ${config.tokenSymbol}.`,
    minimumPurchWarn2: `Purchase amount must be no more than {VALUE1} ${config.tokenSymbol}.`,
    presaleInactive: "Presale is inactive.",
    insufFunds: "You have not enough money to make a transaction.",
    impossToTx: "It is impossible to make a transaction.",
    invalidTime: "Invalid time.",
    stayAndWait:
      "Please stay on the website and wait for the transaction confirmation",
    goesWrong: "You canceled the operation or something goes wrong.",
    thankYou: "Thank you for your purchase!",
    tokPayFailed: "Token payment failed",
    claimNoFunds: "You have no tokens available for withdrawal.",
    statClaimed: `Your ${config.tokenSymbol} tokens will be sent to your address soon.`,
    connectNote:
      "*Please note that, this action can not be undone once the wallet is authorize.",
    connectTheWallet: "Connect the wallet",
    youOwn: "You own",
    buyWith: "Buy with",
    claimTokens: "Claim",
    buyTokenWith: `Buy ${config.tokenSymbol} with`,
    minimumTtl: "Minimum",
    buyDesc: `Enter the amount of ${config.tokenSymbol} you wish to purchase, then click "Buy"`,
    buyTtl: "Buy",
    payTtl: "Pay",
    approveMessage: `Payment with stablecoins will require confirmation of two transactions: first to approve spending and second to ${config.tokenSymbol} purchase. Stay on the website until the all transactions are confirmed. Only ERC-20 tokens supported.`,
    wygTitle1: "A dynamic, hack n slash RPG",
    wygTitle2: "Highly immersive, rendered gameplay",
    wygTitle3: "PVE and PVP modes",
    aboutDesc1: `Boasting flashy combat, stellar graphics, and various game modes, ${config.appName} is the first AAA-quality fast-paced F2P hack-and-slash RPG in the blockchain launching in Polygon.`,
    aboutDesc2:
      "Violence, betrayal and a cunning evil has brought about the brutal fall of the world of Ezura. The Betrayer, a being of immense evil, has annihilated the stalwart protectors of the realm and for 1,000 years, darkness has reigned.",
    aboutDesc3:
      "It is a time of desperation, despair and death, as the Betrayer’s armies cover the land.",
    aboutDesc4:
      "But from the ruins, a possible salvation arises; the last of the once mighty warrior order has been resurrected by an ancient goddess known as the Sentinel. Together, you will attempt to bring a spark of hope to the desolate land.",
    aboutDesc5:
      "Become a fearless dungeon crawler, a bounty hunting battle-mage, or a powerful warrior, grinding for loot and rare equipment. Craft epic gear, bend nature’s magic to your will and avenge your fallen brothers on an epic quest of might and revenge.",
    contactUsDesc: `Become a ${config.appName} ambassador and earn game tokens, gold, and gems!`,
    contactUs: "Contact Us",
    asSeenOnTtl: "As seen on",
    facTtl1: "Discover the beautiful world of Ezura",
    facTtl2: "Master a wide variety of weapons and elements",
    facTtl3: "Build devastating attack combinations",
    facTtl4: "Craft unique, powerful gear and weapons",
    facTtl5: "Use Hack N Slash gameplay to slay your opponents",
    facTtl6: "Compete with other players in fast-paced, brutal PVP",
    teamName1: "James Seaman",
    teamTtl1: "CEO",
    teamName2: "Jeremy Brown",
    teamTtl2: "COO",
    teamName3: "Mariusz Szynalik",
    teamTtl3: "Project Director for HitBox Games",
    teamName4: "Yupeng Qin",
    teamTtl4: "Project Director for Asian Dev Team",
    teamName5: "Jakub Szamalek",
    teamTtl5: "Narrative Director",
    teamName6: "John Moyer",
    teamTtl6: "American musician",
    teamName7: "Vee Lozano",
    teamTtl7: "Business Development Lead",
    teamName8: "Jason Hung",
    teamTtl8: "Advisor",
    teamName9: "Charlie Hu",
    teamTtl9: "Advisor",
    teamName10: "Adam Vine",
    teamTtl10: "Narrative Design Director",
    teamName11: "Ben Abbott",
    teamTtl11: "Weapons Creator and Consultant ",
    teamTtl: "Team",
    partnersTtl: "Partners",
    backersTtl: "Backers",
    launchPartnTtl: "Launch Partners",
    techPartnTtl: "Technology Partners",
    comPartnTtl: "Community Partners",
    presTtl: "How to buy",
    presStep1: "STEP 1",
    presStep2: "STEP 2",
    presStep3: "STEP 3",
    presStep1Desc:
      "First, make sure you have the MetaMask wallet installed on your browser, or use one of the wallets to connect to one of the supported wallets (we recommend Trust Wallet).<br/>Purchasing from a desktop browser will give you a smoother buying experience. For this we recommend Metamask.<br/>If you are buying on a mobile phone, we recommend using Trust Wallet and connecting through the built-in browser (just copy https://swordsofblood.com to the Trust Wallet browser).",
    presStep2Desc:
      "Once you have the wallet provider you want to use, click Connect Wallet and select the appropriate option. In the case of a mobile wallet app, you will need to select Wallet Connect.",
    presStep3Desc: `You can purchase ${config.tokenSymbol} with ETH, USDT, USDC And DAI. After the pre-sale is over, you will be able to claim your ${config.tokenSymbol} tokens. We'll post the details closer, but you'll need to visit the main site https://swordsofblood.com and click the silver 'Claim' button.`,
  };
}
