import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './productTypes';

const api = 'https://api.punkapi.com/v2/beers';
const limits = 'per_page=80';

// Instead of returning an action, we return a function
// It doesnt have to be pure, async api calls

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

/* eslint-disable implicit-arrow-linebreak */
export const fetchProducts = () =>
  // receive dispatch as an argument
  (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(`${api}?${limits}`)
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
export const fetchProduct = (id) =>
  // receive dispatch as an argument
  (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(`${api}/${id}`)
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
export const fetchPairings = (query) => {
  // receive dispatch as an argument
  let findPair = '';
  if (query === '') {
    findPair = `${api}?${limits}`;
  } else {
    findPair = `${api}?food=${query}`;
  }
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(findPair)
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
/* eslint-enable implicit-arrow-linebreak */
