import {Store} from 'store/types';
import {createLogger} from 'redux-logger';

//------------------------------------------------------------------------------

// You can put all the actions you want the logger to ignore in this array
const ignoredActions: Store.ActionType[] = [
  '__NEXT_REDUX_WRAPPER_HYDRATE__',
];

export default createLogger({
  // Customize the redux logger output
  // NOTE: if you want to use the old logger just remove the predicate function
  predicate: (_, action) => {
    // Check and log only wanted actions
    if (!ignoredActions.includes(action.type)) {
      console.log(
        `%c${action.type}`,
        'color: #6DBDBF; font-weight: bold',
        action.payload || '',
      );
    }

    return false;
  },
});