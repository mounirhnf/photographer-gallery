import React from 'react';
import {Store} from 'store/types';

import {useDispatch, useSelector} from 'react-redux';

import {setNoOverflow} from 'store/actions';

import userAgent from 'utility/user-agent';

//------------------------------------------------------------------------------

export default function useNoOverflow() {
  const context = useSelector((store: Store.State) => store.currentContext);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (context) {
      document.body.style.overflow = 'hidden'
      userAgent() !== 'mobile' && dispatch(setNoOverflow(true));
    } else {
      document.body.style.overflow = 'auto';
      dispatch(setNoOverflow(false));
    }
  }, [dispatch, context]);
}
