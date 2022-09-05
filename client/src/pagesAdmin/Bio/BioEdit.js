import './bioEdit.css';

import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchBio } from '../../redux/actions';
import SecondaryNav from '../../components/Navbar/SecondaryNav';
import CurrentMembers from './CurrentMembers';




const initialState = {bio: ''};
const BioEdit = ({ fetchBio, currentBio }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [updated, setUpdated] = useState(false);
  
  function reducer(state, action) {
    switch(action.type) {
      case 'setCurrentBio':
        return {bio: currentBio[0].text};
      case 'updateBio':
        return {bio: action.payload};
      default:
        return state;
    }
  }
        
  useEffect(() => {
    fetchBio();
  }, [fetchBio]);

  useEffect(() => {
    dispatch({type: 'setCurrentBio'})
  }, [currentBio[0].text]);

  const handleInput = e => {
    dispatch({type: 'updateBio', payload: e.target.value});
    setUpdated(false);
  };

  const handleSubmit = () => {
    const payload = {data: state.bio};
    axios.post('/api/updateBio', payload).then(() => {
      setUpdated(true);
      fetchBio();
    }).catch(err => console.log(err));
  };


  
  return (
    <>
      <div id="bioEdit" className="container">
        <h3>Update Bio</h3>
        <form>
          <div className="mb-3 form-floating">
            <textarea
              defaultValue={state.bio}
              onChange={(e) => handleInput(e)}
              required 
              className="form-control" 
              id="bioText"
            >
            </textarea>
            <label htmlFor="bioText" >We are <span>YES DEVIL</span>,</label>
          </div>
          <div className="d-flex">
            <button 
              onClick={handleSubmit}
              type="button" 
              className="btn btn-danger"
              disabled={updated}
            >
              {updated ? 
              <>Update Successful &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </> 
              : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
      <SecondaryNav label={"Members"} />
      <div className="container">
        <div className="row">
          <CurrentMembers />
        </div>
      </div>
    </>
  );
};

function mapStateToProps({ currentBio }) {
  return { currentBio };
}

export default connect(mapStateToProps, { fetchBio })(BioEdit);