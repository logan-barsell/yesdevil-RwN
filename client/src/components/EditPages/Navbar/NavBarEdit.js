import '../../Navbar/TopNav.css';

import React, { useContext, useEffect, useRef } from 'react';
import NavLinkEdit from '../Routing/NavLinkEdit';
import { Collapse } from 'bootstrap';
import { ActiveContext } from '../';

import { useMsal } from "@azure/msal-react";

function handleLogout(instance) {
  instance.logoutPopup().catch(e => {
    console.error(e);
  }).then(() => {
    window.history.pushState({}, '', '/');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  });
}

const TopNav = ({ routes }) => {

  const { instance } = useMsal();

  const ref = useRef();
  const { toggle, setToggle } = useContext(ActiveContext);

  const menuToggle = () => {
    setToggle(toggle => !toggle);
  }

  useEffect(() => {
    const menuCollapse = document.getElementById('menu');
    const bsCollapse = new Collapse(menuCollapse, {
      toggle: false
    });
    toggle ? bsCollapse.show() : bsCollapse.hide();

    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setToggle(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };

  });

  return (
    <nav ref={ref} className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand yesdevil hvr-grow" href="/editHome">YES DEVIL</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => menuToggle()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <div className="navbar-nav justify-content-around">
            <NavLinkEdit routes={routes} menuToggle={menuToggle} />
            <a href="/" className="nav-item nav-link">
              <button
                onClick={() => handleLogout(instance)}
                type="button"
                className="btn btn-danger"
              >
                Log Out
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="modal-container"></div>
    </nav>
  );
}

export default TopNav;