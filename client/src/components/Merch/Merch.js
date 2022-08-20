import './Merch.css';

import React from 'react';
import SecondaryNav from '../Navbar/SecondaryNav';
import Products from './Products';

// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const MerchPage = () => {
  return (
    <div id="merch" className="fadeIn">

      <SecondaryNav label='Merchandise' />

      <div className="row container justify-content-around py-3 py-lg-4" id="product-list">
        {/* <Products /> */}
        <h1>UNDER CONSTRUCTION</h1>
      </div>
    </div>

  );
}

export default MerchPage;