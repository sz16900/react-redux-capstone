import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchProduct } from '../redux';
import Loader from '../components/Loader';

const iter = 0;

function Product({ productData, fetchProduct }) {
  const { id } = useParams();
  useEffect(() => {
    fetchProduct(id);
    // empty array do it is dispatched only once
  }, []);
  if (productData.loading) {
    return <Loader />;
  }
  if (productData.error) {
    return <h2>{productData.error}</h2>;
  }
  return (
    <div className="flex flex-col ">
      {productData
        && productData.products
        && productData.products.map(product => (
          <div
            key={product.id}
            className="sm:p-1 md:w-1/2 md:self-center flex flex-col"
          >
            <img
              alt="bottle or can or kef of beer"
              src={product.image_url}
              className="w-32 self-center"
            />
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">Name: </span>
              {product.name}
            </h2>
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">Tagline: </span>
              {product.tagline}
            </h2>
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">First Brewed: </span>
              {product.first_brewed}
            </h2>
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">Description: </span>
              {product.description}
            </h2>
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">ABV: </span>
              {product.abv}
            </h2>
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">IBU: </span>
              {product.ibu}
            </h2>
            <h2 className="p-3 border-black border-b-2 text-2xl">
              <span className="text-3xl">PH: </span>
              {product.ph}
            </h2>
            <h2 className="p-3 text-2xl">
              <span className="text-3xl">Food Pairings: </span>

              {product.food_pairing.map(food => (
                <p key={iter}>
                  {' '}
                  {food}
                </p>
              ))}
            </h2>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = state => ({
  productData: state.product,
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: params => dispatch(fetchProduct(params)),
});

Product.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  productData: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  fetchProduct: PropTypes.func,
};

Product.defaultProps = {
  productData: {},
  fetchProduct: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
