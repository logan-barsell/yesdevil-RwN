import React, { Component } from 'react';
import { fetchShows } from '../../../actions';
import { connect } from 'react-redux';
import AddShow from './AddShow';

class CurrentShows extends Component {

  compondentDidMount() {
    this.props.fetchShows();
  }

  render() {
    return (
      <AddShow />
    );
  }
}

function mapStateToProps({ shows }) {
  return { shows }
}

export default connect(mapStateToProps, { fetchShows })(CurrentShows);