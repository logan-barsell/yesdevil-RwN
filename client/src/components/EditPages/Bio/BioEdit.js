import './bioEdit.css';

import React, { Component } from 'react';
import SecondaryNav from '../../Navbar/SecondaryNav';
import CurrentMembers from './CurrentMembers';
import AddMember from './AddMember';

class BioEdit extends Component {

  state = { addMemberForm: false };

  renderContent() {
    if (this.state.addMemberForm) {
      return (
        <AddMember onCancel={() => this.setState({ addMemberForm: false })} />
      );
    }
    return <CurrentMembers onAddMember={() => this.setState({ addMemberForm: true })} />;
  }

  render() {
    return (
      <>
        <SecondaryNav label={"Members"} />
        <div className="container">
          <div className="row">
            {this.renderContent()}
          </div>
        </div>
      </>
    );
  }
}

export default BioEdit;