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
        // const addedToCart = cart.products && cart.products.some(cartItem => cartItem.product.id === product.id);
        return (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card product"><img className="card-img-top" src={product.images[0]} alt="product" />
  
              <div className="card-body">
                <h5 className="card-title product-name">{product.name}</h5>
  
                <div className="price">$<span>{price.unit_amount / 100}</span></div>
                <div className="d-grid gap-2">
                {/* { addedToCart ?
                  <button
                    className="btn btn-sm btn-danger"
                    disabled
                  >Added to Cart &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                  </svg>
                  </button>
                : */}
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