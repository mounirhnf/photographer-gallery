//------------------------------------------------------------------------------
// This hook is used to prevent user from scrolling if a context is open
//------------------------------------------------------------------------------

import React from 'react';
import {Store} from 'store/types';

import {useSelector} from 'react-redux';

import userAgent from 'utility/user-agent';

//------------------------------------------------------------------------------

export default function useNoOverflow() {
  const context = useSelector((store: Store.State) => store.currentContext);

  React.useEffect(() => {
    if (context) {
      !(userAgent() === 'mobile') && (document.body.style.overflow = 'hidden');
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [context]);
}
