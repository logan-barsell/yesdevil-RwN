import 'bootstrap/dist/js/bootstrap.bundle';
import './Music.css';

import React, { useEffect } from 'react';
import SecondaryNav from '../../components/Navbar/SecondaryNav';
import { fetchPlayers } from '../../redux/actions';
import { connect } from 'react-redux';

const MusicPage = ({ fetchPlayers, players }) => {
  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <div id="music" className="fadeIn">

      {players?.map(player => (
        <div>
          <SecondaryNav label={player.title} />
          <div className="audioPlayer container">
            <iframe style={{"border-radius":"12px"}} src={player.embedLink} width="100%" height="390px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      ))
      }
    </div>

  );
};

function mapStateToProps({ music }) {
  return { players: music };
}
 
export default connect(mapStateToProps, { fetchPlayers })(MusicPage);