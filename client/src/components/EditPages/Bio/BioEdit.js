import './bioEdit.css';

import React from 'react';
import SecondaryNav from '../../Navbar/SecondaryNav';
import AddMember from './AddMember';

const BioEdit = () => {
  return (
    <>
      <SecondaryNav label={"Members"} />
      <div className="container">
        <div className="row">
          <AddMember />
        </div>
      </div>
    </>
  );
}

export default BioEdit;