import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

// Combina todos los reducers individuales en un solo rootReducer
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  chat: chatReducer,
  // Añadir otros reducers aquí según se requiera
});

export default rootReducer;
