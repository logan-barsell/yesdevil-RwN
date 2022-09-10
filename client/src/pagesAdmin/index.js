import '../App.css';
import '../plugins/loading-bar.css';

import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavEdit from '../components/Navbar/NavBarEdit';
// import BottomNav from '../Navbar/BottomNav';
import HomeEdit from './Home/HomeEdit';
import MusicEdit from './Music/MusicEdit';
import MerchEdit from './Merch/MerchEdit';
import MediaEdit from './Media/MediaEdit';
import BioEdit from './Bio/BioEdit';
import ContactEdit from './Contact/ContactEdit';
import history from '../history';
import PicturesEdit from './Media/PicturesEdit';
import VideosEdit from './Media/videoEdit/VideosEdit';



export const ActiveContext = createContext();

const EditPages = () => {

  const routes = [
    { name: 'Home', value: '/editHome' },
    { name: 'Music', value: '/editMusic' },
    { name: 'Store', value: '/editMerch' },
    { name: 'Media', value: '/editMedia/pictures' },
    { name: 'About Us', value: '/editAboutus' },
    { name: 'Contact', value: '/editContact' }
  ];

  const currentUrl = window.location.pathname;

  let initialState;
  for (let i = 0; i < routes.length - 1; i++) {
    if (routes[i].value === currentUrl) {
      initialState = i;
    };
  };

  const [activeIndex, setActiveIndex] = useState(initialState);
  const [toggle, setToggle] = useState(false);


  return (
    <>
      <Router history={history}>
        <ActiveContext.Provider value={{ activeIndex, setActiveIndex, toggle, setToggle }}>
          <TopNavEdit routes={routes} />
          <Routes>
            <Route path="/editHome" exact element={<HomeEdit />} />
            <Route path="/editMusic" exact element={<MusicEdit />} />
            <Route path="/editMerch" exact element={<MerchEdit />} />
            <Route path="/editMedia" exact element={<MediaEdit />} />
            <Route path="/editAboutus" exact element={<BioEdit />} />
            <Route path="/editContact" exact element={<ContactEdit />} />
          </Routes>
          {/* <BottomNavEdit routes={routes} /> */}
        </ActiveContext.Provider>
      </Router>
    </>
  );
}

export default EditPages;