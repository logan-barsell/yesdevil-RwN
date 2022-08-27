import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions';
import { addProductToCart } from '../../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';

const Products = ({ fetchProducts, products }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addToCart = item => {
    dispatch(addProductToCart(item));
  };


  const renderProducts = products.length ? () => 
      products.map((item, index) => {
        const { product, price } = item;
        return (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card product"><img className="card-img-top" src={product.images[0]} alt="product" />
  
              <div className="card-body">
                <h5 className="card-title product-name">{product.name}</h5>
  
                <div className="price">$<span>{price.unit_amount / 100}</span></div>
                <div className="d-grid gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-sm btn-danger"
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#shoppingCart" 
                    aria-controls="shoppingCart"
                  >Add to Cart</button>
                {/* } */}
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