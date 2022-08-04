import './currentShows.css';

import React, { Component } from 'react';
import { fetchShows } from '../../../actions';
import { connect } from 'react-redux';
import AddShow from './AddShow';

class CurrentShows extends Component {

  compondentDidMount() {
    this.props.fetchShows();
  }

  renderShows() {
    console.log(this.props.shows);
    return (
      <div>Shows</div>
    );
  }

  render() {
    return (
      <>
        <div className="accordion" id="showsList">
          {this.props.shows.length ? this.renderShows() : <h5>No Shows</h5>}
        </div>
        < AddShow />
      </>
    );
  }
}

function mapStateToProps({ shows }) {
  return { shows }
}

export default connect(mapStateToProps, { fetchShows })(CurrentShows);