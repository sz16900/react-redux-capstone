import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../redux';
import Loader from '../components/Loader';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Product({ productData, fetchProduct }) {
  const { id } = useParams();
  useEffect(() => {
    fetchProduct(id);
    // empty array do it is dispatched only once
  }, []);
  return productData.loading ? (
    <Loader></Loader>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div className="flex flex-col ">
      {productData &&
        productData.products &&
        productData.products.map((product) => (
          <div className="sm:p-1 md:w-1/2 md:self-center flex flex-col">
            <img src={product.image_url} className="w-32 self-center"></img>
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
              {product.food_pairing.map((food) => {
                return <p> {food}</p>;
              })}
            </h2>
          </div>
        ))}
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
    fetchProduct: (params) => dispatch(fetchProduct(params)),
  };
};

Product.propTypes = {
  fetchData: PropTypes.func,
  productData: PropTypes.object,
};

Product.defaultProps = {
  fetchData: () => {},
  productData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
