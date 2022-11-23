import './styles/App.sass';
import './styles/slider.sass';
import React, { useState, useEffect } from 'react';
import {useLocation, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import updateFontSize from './helpers/calcFontSize';
import useDetectDevice from './hooks/useDetectDevice';
import ForPublishersAndAffilateNetworks from './pages/ForPublishersAndAffilateNetworks';
import ForAdNetworks from './pages/ForAdNetworks';
import ForMobileNetworkOperators from './pages/ForMobileNetworkOperators';
import ForCarrierBillingAggregators from './pages/ForCarrierBillingAggregators';
import ForContentAndOfferOwners from './pages/ForContentAndOfferOwners';
import MobileOffers from './pages/MobileOffers';
import CarrierBillingAggregator from './pages/CarrierBillingAggregator';
import MediaBuyingTeam from './pages/MediaBuyingTeam';
import CarrierBillingAggregatorPlatform from './pages/CarrierBillingAggregatorPlatform';
import AdPlatform from './pages/AdPlatform';


import useWindowDimension from './hooks/useWindowDimension';


function App() {

  let currentBreakPoint = useDetectDevice();
  updateFontSize(currentBreakPoint);

  let location = useLocation();

  if (location.pathname !== '/'){
    document.body.style.color = "#000000"
  } else {
    document.body.style.color = "#ffffff"
  }

  const [width, height] = useWindowDimension();

  useEffect(() => {

    setTimeout(function(){
      let body = document.body,
      html = document.documentElement,
      calcHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
      body.style.overflow = 'hidden auto';
      body.style.height = calcHeight + 'px';
    }, 900)
    return () => {
      document.body.style.overflow = 'hidden';
      document.body.style.height = 'auto';
    };
  }, [location.pathname, height, width]);

  const [menuState, setMenuState] = useState(false);

  function handleMenuBtnClick(){
    setMenuState(!menuState);
  }

  function closeMenu(){
    setMenuState(false);
  }

  return (
    <>
      <div className='background'>
        <div className={`background__inner ${location.pathname === '/' ? 'background__image' : 'background__white'}`}></div>
      </div>

      <div className='lines'></div>

      <Header 
        menuState={menuState} 
        clickHandler={handleMenuBtnClick} 
        closeMenu={closeMenu} 
        uiTheme={location.pathname !== '/' ? 'dark' : '' } 
        bp={currentBreakPoint}
        location={location.pathname}
      />

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/for-publishers-and-affiliate-networks" element={<ForPublishersAndAffilateNetworks /> }/>
        <Route path="/for-ad-networks" element={<ForAdNetworks /> }/>
        <Route path="/for-mobile-network-operators" element={<ForMobileNetworkOperators /> }/>
        <Route path="/for-carrier-billing-aggregators" element={<ForCarrierBillingAggregators /> }/>
        <Route path="/for-content-and-offer-owners" element={<ForContentAndOfferOwners /> }/>

        <Route path="/mobile-offers" element={<MobileOffers bp={currentBreakPoint}/> }/>
        <Route path="/carrier-billing-aggregator" element={<CarrierBillingAggregator /> }/>
        <Route path="/media-buying-team" element={<MediaBuyingTeam /> }/>

        <Route path="/technology" element={<Navigate to="/technology/carrier-billing-aggregator-platform" replace />}/>
        <Route path="/technology/carrier-billing-aggregator-platform" element={<CarrierBillingAggregatorPlatform bp={currentBreakPoint}/> }/>
        <Route path="/technology/ad-platform" element={<AdPlatform bp={currentBreakPoint}/> }/>
        {/* <Route path="/technology/:id" element={<CarrierBillingAggregatorPlatform /> }/> */}
        
        <Route path="*" element={<Navigate to="/" replace />}/>

      </Routes>

      <Footer disabled={location.pathname !== '/' ? 'disabled' : ''} menuState={menuState} bp={currentBreakPoint}/>
    </>
  );
}

export default App;
