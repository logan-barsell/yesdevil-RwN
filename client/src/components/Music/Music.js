import './Music.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import SecondaryNav from '../Navbar/SecondaryNav';

import AudioPlayer from './AudioPlayer/AudioPlayer';



const MusicPage = () => {

  // const [activeTab, setActiveTab] = useState(0);

  // const tabOptions = ['Songs', 'Lyrics', 'Credits'];

  // const tabSelection = tabOptions.map((tab, index) => {
  //   const active = index === activeTab ? 'active' : '';
  //   return (
  //     <li key={index} className="nav-item">
  //       <a 
  //         href="#!"
  //         className={`nav-link ${active}`}
  //         onClick={() => setActiveTab(index)}
  //       >
  //         {tab}
  //       </a>
  //     </li>
  //   );
  // });

  // const selectedContent = () => {
  //   if (activeTab === 0) {
  //     return (
  //       <ul className="list-group justify-content-center" id="songs">
  //           <Songs songs={songs} />
  //         </ul>
  //     );
  //   }
  // };


  return (
    <div id="music" className="fadeIn">

      <SecondaryNav label='The High Cost of Living Low' />



      <AudioPlayer />



      {/* <div className="row justify-content-center">
        <div className="col img-container">
          <img id="album-cover" src={cover1} alt=""/>

          <div className="dropdown hcll">
            <button className="btn btn-danger buyalbum dropdown-toggle" id="buyalbum" data-bs-toggle="dropdown" type="button" aria-expanded="false">
              Buy Album
            </button>
            <ul className="dropdown-menu" aria-labelledby="buyalbum">
              <li>
                <a href="#" className="dropdown-item">
                  <img className="itunes" src={itunes} alt=""/>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="row justify-content-center album">
        <div id="album-stuff">
          <ul className="nav nav-tabs justify-content-center album-tab">
            {tabSelection}
          </ul>

          {activeTab === 0 && 
            <ul className="list-group justify-content-center" id="songs">
            <Songs songs={songs} />
          </ul>
          }
          
          {activeTab === 1 && 
            <ul className="list-group" id="lyrics">
              <Lyrics songs={songs} />
            </ul>
          }

          {activeTab === 2 &&
            <div id="credits">
              <SongCredits />
            </div>
          }

        </div>
      </div> */}
    </div>

  );
}

export default MusicPage;