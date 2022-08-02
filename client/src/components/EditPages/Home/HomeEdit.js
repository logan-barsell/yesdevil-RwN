import React from 'react';
import SecondaryNav from '../../Navbar/SecondaryNav';
import CurrentShows from './CurrentShows';

const HomeEdit = () => {
  return (
    <>
      <SecondaryNav label={"Upcoming Shows"} />
      <div className="container">
        <div className="row">
          <CurrentShows />
        </div>
      </div>

    </>
  );
}

export default HomeEdit;