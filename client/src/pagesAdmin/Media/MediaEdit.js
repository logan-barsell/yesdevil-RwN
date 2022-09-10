import './mediaEdit.css';

import React, { useState } from 'react';
import PicturesEdit from './PicturesEdit';
import VideosEdit from './videoEdit/VideosEdit';

const MediaEdit = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navOptions = ['Pictures', 'Videos'];

    const onNavClick = (index, event) => {
        event.preventDefault();
        setActiveTab(index);
        window.scrollTo({ top: 0 });
    };

    const renderedNavItems = navOptions.map((option, index) => {
        const active = index === activeTab ? 'active' : '';
        return (
        <li key={index} className="nav-item col-auto">
            <a href="#!" className={`nav-link ${active}`} onClick={(event) => onNavClick(index, event)}>
                {option}
            </a>
        </li>
        );
    });

    return (
        <div id="mediaEdit">
            <ul className="nav main justify-content-center">
                <div className="text-center row align-items-center">
                    {renderedNavItems}
                </div>
            </ul>
            <div className="container">
                {activeTab === 0 &&
                    <PicturesEdit />
                }
                {/* {activeTab === 1 &&
                    <VideosEdit />
                } */}
                </div>
        </div>
    );
};

export default MediaEdit;
