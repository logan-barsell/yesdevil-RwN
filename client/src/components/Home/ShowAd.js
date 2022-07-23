import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import { shows } from './ShowDetails';
import SnipcartButton from '../Merch/SnipcartButton';
import InfoCollapse from '../Bootstrap/InfoCollapse';

const ShowAd = () => {

  const renderShows = shows.map(show => {
    return (
      <div key={show.id} className="col-sm showad">
        <div className="card"><img className="card-img-top" src={show.picURL} alt="PromoFlyer" /></div>
        <InfoCollapse show={show} />
        <div className="d-grid gap-2">
          {show.ticketLink === null ?
            <SnipcartButton data={show.snipcartData} />
            :
            <button className="btn btn-danger">
              <a href={show.ticketLink} className="gettix card-link" target="_blank" rel="noreferrer">Get Tickets</a>
            </button>
          }
        </div>
      </div>
    );
  });

  return (
    <>

      {renderShows}
    </>
  );
};

export default ShowAd;