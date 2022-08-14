import './Bio.css';
import vango from '../../images/logos/vango.png';
import followme from '../../images/aboutus/instafollow.png';

import React, { useEffect } from 'react';
import SecondaryNav from '../Navbar/SecondaryNav';
import { connect } from 'react-redux';
import { fetchMembers } from '../../actions';
// for authentication
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

function handleLogin(instance) {
  instance.loginPopup(loginRequest).then(() => {
    window.history.pushState({}, '', '/editHome');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }).catch(e => {
    console.error(e);
  });
}
const BioPage = ({ fetchMembers, members }) => {
  const { instance } = useMsal();

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const renderMembers = members.map((member, index) => {
    const { _id, bioPic, name, role, instaTag} = member;
    const blob = new Blob([Int8Array.from(bioPic.img.image.data)], {type: bioPic.img.contentType});
    console.log(blob);
    const imgURL = window.URL.createObjectURL(blob);
    console.log(imgURL);

    return (
      <div key={_id}>
        {index === 0 ? null : <hr />}
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 bioPic"><img src={imgURL} alt={`${name}: ${role}`} /></div>
          <div className="col-12 col-sm-6 ind-bio">
            <div className="row">
              <h4>
                {name}
              </h4>
              <p>
                {role}
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <a href={instaTag} target="_blank" rel="noreferrer">
                  <img className="instafollow" src={followme} alt="Follow Me"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="aboutus" className="fadeIn">

      <div>

        <div className="container">

          <div className="row justify-content-center">
            <div className="col-7 col-sm-auto">
              <img
                onClick={() => handleLogin(instance)}
                className="aboutuspic"
                src={vango}
                alt=""
              />
            </div>

          </div>

          <div className="row justify-content-center bio">
            <p><span>We are <span className="yesdevil">YES DEVIL</span></span> , a metal band from the San Francisco Bay Area. Our sound has been shaped by a variety of influences that all come together to create the in your face heavy metal we play today. With attitude charged riffs and groove fueled beats, we have a unique modern take to bring onto the scene.</p>
          </div>

        </div>

        <br />

        {members.length ? 
        
          <div className="members">
            <SecondaryNav label="Members" />
            <br />
            <div className="container pb-5">
              {renderMembers}
            </div>
          </div>
        : null
        }

      </div>

    </div>

  );
}

function mapStateToProps({ members }) {
  return { members };
}

export default connect(mapStateToProps, { fetchMembers })(BioPage);