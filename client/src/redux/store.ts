import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

const middleware = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
