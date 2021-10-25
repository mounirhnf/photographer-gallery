import {Store} from 'store/types';

import defaults from 'store/defaults';

// import {actions} from 'store/actions';

//------------------------------------------------------------------------------

export default function reducer(
  state: Store.State = defaults,
  {type, payload}: Store.Action,
): Store.State {
  switch (type) {
    default:
      return state;
  }
}
