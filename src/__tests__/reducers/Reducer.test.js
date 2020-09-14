import productReducer from '../../redux/product/productReducer';
import * as actions from '../../redux/index';

describe('The Main Reducer', () => {
  const initialState = {
    loading: false,
    products: [],
    error: '',
  };
  test('checks for error status', () => {
    const reducer = productReducer(
      initialState,
      actions.fetchProductsFailure('error')
    );
    expect(reducer).toEqual({ loading: false, products: [], error: 'error' });
  });

  test('checks for success status', () => {
    const reducer = productReducer(
      initialState,
      actions.fetchProductsSuccess({})
    );
    expect(reducer).toEqual({ loading: false, products: {}, error: '' });
  });
  test('checks for success status', () => {
    const reducer = productReducer(
      initialState,
      actions.fetchProductsRequest({})
    );
    expect(reducer).toEqual({ loading: true, products: [], error: '' });
  });
});
