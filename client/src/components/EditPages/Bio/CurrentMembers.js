import './currentMembers.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMembers } from '../../../actions';

class CurrentMembers extends Component {

  componentDidMount() {
    this.props.fetchMembers();
  }

  renderMembers() {
    return this.props.members.map(({ _id, bioPic, name, role, fbLink, instaTag, snapName }) => {
      const headerId = `heading${_id}`;
      const collapseId = `collapse${_id}`;

      return (
        <div key={_id} className="accordion-item">
          <h2 className="accordion-header" id={headerId}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
              {name}
            </button>
          </h2>
          <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={headerId} data-bs-parent="#membersList">
            <div className="accordion-body">
              <img src={bioPic} className="img-thumbnail" alt={`${name}: ${role}`} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div>Current Members</div>
        <div className="accordion" id="membersList">
          {this.renderMembers()}
        </div>

      </>
    );
  }

};

function mapStateToProps({ members }) {
  return { members };
}

export default connect(mapStateToProps, { fetchMembers })(CurrentMembers);