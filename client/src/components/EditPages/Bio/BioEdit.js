import './bioEdit.css';

import React, { Component } from 'react';
import SecondaryNav from '../../Navbar/SecondaryNav';
import CurrentMembers from './CurrentMembers';

class BioEdit extends Component {

  render() {
    return (
      <>
        <SecondaryNav label={"Members"} />
        <div className="container">
          <div className="row">
            <CurrentMembers />
          </div>
        </div>
      </>
    );
  }
}

export default BioEdit;