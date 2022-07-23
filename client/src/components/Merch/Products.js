import React from 'react';
import { productList } from './ProductList';
import SnipcartButton from './SnipcartButton';

const Products = () => {

  const renderProducts = productList.map(product => {
    return (
      <div key={product.id} className="col-lg-4 col-md-6">
        <div className="card product"><img className="card-img-top" src={product.image} alt="Card cap" />

          <div className="card-body">
            <h5 className="card-title product-name">{product.name}</h5>

            <div className="price">$<span>{product.price}</span></div>
            <div className="d-grid gap-2">
              <SnipcartButton data={product.snipcartData} />
            </div>
          </div>

        </div>
      </div>
    );
  });

  return (
    <>
      {renderProducts}
    </>
  );

};

export default Products;