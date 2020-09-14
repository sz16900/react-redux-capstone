import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchProducts } from '../redux';
import Loader from '../components/Loader';

function Home({ productData, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
    // empty array do it is dispatched only once
  }, []);
  if (productData.loading) {
    return <Loader />;
  }
  if (productData.error) {
    return <h2>{productData.error}</h2>;
  }
  return (
    <div>
      <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center">
        {productData
          && productData.products
          && productData.products.map(product => (
            <div
              key={product.id}
              className="sm:p-1 md:w-1/2 self-center flex flex-col mb-3"
            >
              <h3 className="self-center p-3 text-xl font-extrabold">
                {product.name}
              </h3>
              <Link className="self-center" to={`/products/${product.id}`}>
                <img
                  alt="beer or can or keg of beer"
                  src={product.image_url}
                  className="h-64"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  productData: state.product,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

Home.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  productData: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  fetchProducts: PropTypes.func,
};

Home.defaultProps = {
  fetchProducts: () => {},
  productData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
