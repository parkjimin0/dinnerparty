import guestReducer from './guestsReducer';
import roomReducer from './roomReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
  guest: guestReducer,
  room: roomReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
