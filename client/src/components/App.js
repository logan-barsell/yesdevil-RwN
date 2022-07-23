import './App.css';
import './Merch/Snipcart.css'
import '../plugins/loading-bar.css';

import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './Navbar/TopNav';
import BottomNav from './Navbar/BottomNav';
import HomePage from './Home/Home';
import MusicPage from './Music/Music';
import MerchPage from './Merch/Merch';
import MediaPage from './Media/Media';
import BioPage from './Bio/Bio';
import ContactPage from './Contact/Contact';
import history from '../history';

export const ActiveContext = createContext();

const App = () => {

  const routes = [
    { name: 'Home', value: '/' },
    { name: 'Music', value: '/music' },
    { name: 'Store', value: '/merch' },
    { name: 'Media', value: '/media' },
    { name: 'About Us', value: '/aboutus' },
    { name: 'Contact', value: '/contact' }
  ];

  const currentUrl = window.location.pathname;
  console.log(currentUrl);

  let initialState;
  for (let i = 0; i < routes.length - 1; i++) {
    if (routes[i].value === currentUrl) {
      initialState = i;
    };
  };

  const [activeIndex, setActiveIndex] = useState(initialState);
  const [toggle, setToggle] = useState(false);


  return (
    <Router history={history}>
      <ActiveContext.Provider value={{ activeIndex, setActiveIndex, toggle, setToggle }}>
        <TopNav routes={routes} />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/music" exact element={<MusicPage />} />
          <Route path="/merch" exact element={<MerchPage />} />
          <Route path="/media" exact element={<MediaPage />} />
          <Route path="/aboutus" exact element={<BioPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
        </Routes>
        <BottomNav routes={routes} />
      </ActiveContext.Provider>
    </Router>
  );
}

export default App;