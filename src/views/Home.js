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
      <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center">
        {productData &&
          productData.products &&
          productData.products.map((product) => (
            <div className="sm:p-1 md:w-1/2 self-center flex flex-col mb-3">
              <h3 className="self-center p-3 text-xl font-extrabold">
                {product.name}
              </h3>
              <Link className="self-center" to={`/products/${product.id}`}>
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
  fetchPairings: () => {},
  productData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
