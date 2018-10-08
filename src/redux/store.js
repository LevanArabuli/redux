import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

// const compose =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {
    status: 'n/a',
    reports: {
      items: []
    }
  },
  // composeEnhancers(applyMiddleware(thunkMiddleware, logger))
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
