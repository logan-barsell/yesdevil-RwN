import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
// import { productList } from './ProductList';


const Products = ({ fetchProducts, products }) => {

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products);

  const renderProducts = products.data ? () => 
      products.data.map((product, index) => {
        return (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card product"><img className="card-img-top" src={product.images[0]} alt="product" />
  
              <div className="card-body">
                <h5 className="card-title product-name">{product.name}</h5>
  
                <div className="price">$<span>{product.defaultPrice}</span></div>
                <div className="d-grid gap-2">
                <button
                  className="btn btn-danger">Add to Cart</button>
                </div>
              </div>
  
            </div>
          </div>
        );
      }) : () => null;

  return (
    <>

      {renderProducts()}
    </>
  );

};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts })(Products);