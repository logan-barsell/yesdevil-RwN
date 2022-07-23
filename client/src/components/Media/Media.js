import './Media.css';

import React, { useState } from 'react';
import Pictures from './Pictures';
import Videos from './Videos';


const MediaPage = () => {

  const navOptions = ['Pictures', 'Videos'];

  const [activeTab, setActiveTab] = useState(0);

  const onNavClick = (index, event) => {
    event.preventDefault()
    setActiveTab(index);
    window.scrollTo({ top: 0 });
  }

  const renderedNavItems = navOptions.map((option, index) => {
    const active = index === activeTab ? 'active' : '';
    return (
      <li key={index} className="nav-item col-auto">
        <a href="#!" className={`nav-link ${active}`} onClick={(event) => onNavClick(index, event)}>
          {option}
        </a>
      </li>
    )
  })



  return (
    <div id="blog" className="fadeIn">

      <ul className="nav main  justify-content-center">
        <div className="text-center row align-items-center">
          {renderedNavItems}
        </div>
      </ul>
      <div className="container">
        {activeTab === 0 &&
          <Pictures />
        }
        {activeTab === 1 &&
          <Videos />
        }
      </div>


    </div>
  );
}

export default MediaPage;