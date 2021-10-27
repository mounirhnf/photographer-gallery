import {createStore, applyMiddleware, Middleware} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import reduxThunk from 'redux-thunk';

import reducer from 'store/reducer';
import logger from 'store/logger';

//------------------------------------------------------------------------------

const middlewares: Middleware[] = [reduxThunk];

// Add the logger middleware only in the development envirement
process.env.NODE_ENV === 'development' && middlewares.push(logger);

//------------------------------------------------------------------------------

const store = createStore(reducer, applyMiddleware(...middlewares));

//------------------------------------------------------------------------------

// Create a store with the next redux wrapper
export default createWrapper(() => store);
