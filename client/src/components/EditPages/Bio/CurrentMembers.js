import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMembers } from '../../../actions';

class CurrentMembers extends Component {

  componentDidMount() {
    this.props.fetchMembers();
  }

  renderMembers() {
    return this.props.members.map(member => {
      return (
        <div key={member._id}>{member.name}</div>
      );
    });
  }

  render() {
    return (
      <>
        <div>Current Members</div>
        {this.renderMembers()}
      </>
    );
  }

};

function mapStateToProps({ members }) {
  return { members };
}

export default connect(mapStateToProps, { fetchMembers })(CurrentMembers);