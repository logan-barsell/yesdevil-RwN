import './Bio.css';
import vango from '../../images/logos/vango.png';

import React, { useEffect } from 'react';
import SecondaryNav from '../Navbar/SecondaryNav';
import { connect } from 'react-redux';
import { fetchMembers } from '../../actions';
// for authentication
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

function handleLogin(instance) {
  instance.loginPopup(loginRequest).catch(e => {
    console.error(e);
    return;
  }).then(() => {
    window.history.pushState({}, '', '/editHome');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  });
}
const BioPage = ({ fetchMembers, members }) => {
  const { instance } = useMsal();

  useEffect(() => {
    const loadScript = src => {
      const tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(tag);
    }
    loadScript('https://static.addtoany.com/menu/page.js');
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const renderMembers = members.map((member, index) => {
    const { _id, bioPic, name, role, fbLink, instaTag, snapName } = member;
    const parsedFbLink = new URL(fbLink).pathname.replace('/', '');
    console.log(parsedFbLink);

    return (
      <div key={_id}>
        {index === 0 ? null : <hr />}
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 bioPic"><img src={bioPic} alt={`${name}: ${role}`} /></div>
          <div className="col-12 col-sm-6 ind-bio">
            <div className="row">
              <h4>
                {name}
              </h4>
              <p>
                {role}
              </p>
            </div>
            <div className="row">
              <div className="col-auto a2a_kit a2a_kit_size_32 a2a_default_style a2a_follow">
                <a href="#!" className="a2a_button_facebook" data-a2a-follow={parsedFbLink}> </a>
                <a href="#!" className="a2a_button_instagram" data-a2a-follow={instaTag}> </a>
                <a href="#!" className="a2a_button_snapchat" data-a2a-follow={snapName}> </a>
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
            <p><span>We are <span className="yesdevil">YES DEVIL</span></span> , a hard rock band currently based out of the San Francisco Bay Area. Our sound is shaped by a wide range of influences from a variety of genres. From the bluesy origins of Rock 'N' Roll to in your face Heavy Metal, we have a modern take on the classic sounds that have shaped rock music into what it is today. After releasing our first EP, <a href="https://itunes.apple.com/us/album/get-damned-ep/924263735" target="_blank" rel="noreferrer">Get Damned</a>, under our original band name and line-up (<a href="https://www.reverbnation.com/se7endead" target="_blank" rel="noreferrer">Se7en Dead</a>), a series of break-ups and line-up changes prompted us to rebrand ourselves a handful of times before finally re-emerging as Yes Devil. With our new full length album, <a href="/music">The High Cost of Living Low</a>, we tie together years of experiences we've shared together as a band. These songs embody the essence of these experiences, the lives we've lived, the people we've met, and lessons we've learned. </p>
          </div>

        </div>

        <br />

        {members.length ? 
        
          <div className="members">
            <SecondaryNav label="Members" />
            <br />
            <div className="container pb-4">
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