import { combineReducers } from 'redux';
import productReducer from './product/productReducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
