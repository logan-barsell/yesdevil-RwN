import 'bootstrap/dist/js/bootstrap.bundle';
import './Music.css';

import React from 'react';
import SecondaryNav from '../../components/Navbar/SecondaryNav';

import AudioPlayer from './AudioPlayer/AudioPlayer';



const MusicPage = () => {

  return (
    <div id="music" className="fadeIn">

      <SecondaryNav label='The High Cost of Living Low' />
      <AudioPlayer />
    </div>

  );
}

export default MusicPage;