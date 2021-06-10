import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/product-reducer';

export default combineReducers({
  user: userReducer,
  products: productReducer,
});
