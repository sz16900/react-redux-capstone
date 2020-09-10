import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productTypes';

// Instead of returning an action, we return a function
// It doesnt have to be pure, async api calls

export const fetchProducts = () => {
  // receive dispatch as an argument
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://api.punkapi.com/v2/beers?per_page=80')
      .then((response) => {
        // response.data is the JOBS
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
