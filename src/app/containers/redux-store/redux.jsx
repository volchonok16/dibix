import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
