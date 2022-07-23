import './Merch.css';

import React from 'react';
import SecondaryNav from '../Navbar/SecondaryNav';
import Products from './Products';



const MerchPage = () => {
  return (
    <div id="merch" className="fadeIn">

      <SecondaryNav label='Merchandise' />

      <div className="row container justify-content-around" id="product-list">
        <Products />
      </div>
    </div>

  );
}

export default MerchPage;