import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SetGlobalProvider, setNetwork, defaultNetwork } from "./functions/onchain";
import { SetStorageData, GetStorageData, RemoveStorageData } from "./functions/common";
import { GetLocale } from './lang/_langs';
import { config } from "./functions/config";
import Web3Provider from "./context/web3provider";
import Localization from "./context/localization";
import MainContainer from './components/main-container/main-container';
import Homepage from './components/homepage/homepage';
import Presale from './components/presale/presale';
import Allocation from './components/allocation/allocation';
import Roadmap from './components/roadmap/roadmap';
import Privacy from './components/privacy/privacy';
import TermsAndConditions from './components/terms/terms';
import './css/global.css';
import './css/global.responsive.css';
import 'swiper/css';
import 'swiper/css/pagination';

const curLang = GetStorageData('lang');
export default function App() {
	const [lang, setLang] = useState(curLang ? curLang : config.defaultLanguage);
    const [[locales, strings], setStrings] = useState(GetLocale(lang, config.appName));
    const web3provider = useRef({status: false, instance: null, network: setNetwork(defaultNetwork())});

	function SetLanguage(lng) {
        SetStorageData('lang', lng);
        setLang(lng);
        setStrings(GetLocale(lng, config.appName));
    }

    useEffect(()=>{
        async function restoreLastProvider() {
			const storageName = 'lastProvider';
			let lastProvider = GetStorageData(storageName);
			if(lastProvider !== null && JSON.parse(lastProvider)) {
				lastProvider =  JSON.parse(lastProvider);

				if(Math.ceil(Date.now() / 1000) > lastProvider.upts) {
					RemoveStorageData(storageName);
                    RemoveStorageData('walletconnect');
				} else {
                    web3provider.current.network = setNetwork(lastProvider.network);
					await SetGlobalProvider(lastProvider.type, web3provider);
				}
			}
		}
		restoreLastProvider();
    },[])

    return (
        <Web3Provider.Provider value={web3provider}>
		<Localization.Provider value={{strings, lang, locales, SetLanguage}}>
			<MainContainer>
				<Routes>
					<Route path="/" element={<Homepage/>} />
					<Route path="/presale/" element={<Presale/>} />
					<Route path="/allocation/" element={<Allocation/>} />
					<Route path="/roadmap/" element={<Roadmap/>} />
					<Route path="/privacy/" element={<Privacy/>} />
					<Route path="/termsandconditions/" element={<TermsAndConditions/>} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</MainContainer>
		</Localization.Provider>
        </Web3Provider.Provider>
    )
}