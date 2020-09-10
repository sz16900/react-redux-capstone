import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Home({ productData, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
    // empty array do it is dispatched only once
  }, []);
  return productData.loading ? (
    <Loader></Loader>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      <h2>Beer List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {productData &&
          productData.products &&
          productData.products.map((product) => (
            <div className="p-3">
              {' '}
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <Link to={`/products/${product.id}`}>
                <img src={product.image_url} className="h-64"></img>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

Home.propTypes = {
  fetchData: PropTypes.func,
  productData: PropTypes.object,
};

Home.defaultProps = {
  fetchData: () => {},
  productData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
