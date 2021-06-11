import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
   const middlewares = [thunkMiddleware];
   const middlewareEnhancer = applyMiddleware(...middlewares);

   const enhancers = [middlewareEnhancer];
   const composedEnhancers = composeWithDevTools(...enhancers);
   const store = createStore(rootReducer, composedEnhancers);

   return store;
}
