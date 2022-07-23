import React, { useContext, useEffect, useRef } from 'react';
import NavLink from '../Routing/NavLink';
import { Collapse } from 'bootstrap';
import { ActiveContext } from '../App';

import './TopNav.css';
import cart from '../../images/merch/cart.png';

const TopNav = ({ routes }) => {

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
        <a className="navbar-brand yesdevil hvr-grow" href=".">YES DEVIL</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => menuToggle()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <div className="navbar-nav justify-content-around">
            <NavLink routes={routes} menuToggle={menuToggle} />
            <a href="#!" className="nav-item nav-link snipcart-checkout">
              <button type="button" className="btn btn-danger cart-button" data-bs-toggle="modal" data-bs-target="#cart">
                Cart <img src={cart} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;