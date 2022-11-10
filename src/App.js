import './styles/App.sass';
import React, { useState, useEffect } from 'react';
import {useLocation, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import MenuLayer from './components/MenuLayer';
import Footer from './components/Footer';
import updateFontSize from './helpers/calcFontSize';
import useDetectDevice from './hooks/useDetectDevice';
import ForPublishersAndAffilateNetworks from './pages/ForPublishersAndAffilateNetworks';

function App() {

  let currentBreakPoint = useDetectDevice();
  updateFontSize(currentBreakPoint);

  let location = useLocation();

  if (location.pathname !== '/'){
    document.body.style.color = "#000000"
  } else {
    document.body.style.color = "#ffffff"
  }

  useEffect(() => {
    setTimeout(function(){
      document.body.style.overflow = 'hidden auto'; 
    }, 920)
    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, [location.pathname]);

  const [menuState, setMenuState] = useState(false);

  function handleMenuBtnClick(){
    setMenuState(!menuState);
  }

  function closeMenu(){
    setMenuState(false);
  }

  // let backgroundClass;

  // switch (location.pathname) {
  //   case '/':
  //     backgroundClass = 'background__image';
  //     break;
  
  //   case '/for-publishers-and-affiliate-networks':
  //     backgroundClass = 'background__white';
  //     // backgroundClass = 'background__image';
  //     break;

  //   default:
  //     backgroundClass = 'background__image';
  //     break;
  // }

  // <div className={`background__inner ${location.pathname === '/' ? 'background__image' : 'background__white'}`}></div>
  // <div className={`background__inner ${backgroundClass}`}></div>


  return (
    <>
      <div className='background'>
        <div className={`background__inner ${location.pathname === '/' ? 'background__image' : 'background__white'}`}></div>
      </div>

      <div className='lines'></div>

      <Header 
        state={menuState} 
        clickHandler={handleMenuBtnClick} 
        subtitle={'Solutions for'} 
        closeMenu={closeMenu} 
        uiTheme={location.pathname !== '/' ? 'dark' : '' } 
      />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="for-publishers-and-affiliate-networks" element={<ForPublishersAndAffilateNetworks /> }/>
        <Route path="*" element={<Home/>} />
      </Routes>

      <Footer disabled={location.pathname !== '/' ? 'disabled' : ''} menuState={menuState} />

      <MenuLayer menuState={menuState} closeMenu={closeMenu}/>

    </>
  );
}

export default App;
