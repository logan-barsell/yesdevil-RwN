import './Merch.css';

import React from 'react';
import SecondaryNav from '../../components/Navbar/SecondaryNav';
import Products from './Products';

const MerchPage = () => {
  return (
    <div id="merch" className="fadeIn">

      <SecondaryNav label='Merchandise' />

      <div className="row container justify-content-center py-3 py-lg-4" id="product-list">
        <Products />
      </div>
    </div>

  );
}

export default MerchPage;


    {/* <h1
          style={{ 
            "textAlign": 'center',
            'height': '50vh',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'color': 'darkred'
          }}
        >UNDER CONSTRUCTION</h1> */}