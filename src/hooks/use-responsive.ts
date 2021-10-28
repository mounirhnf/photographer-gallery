import React from 'react';

import {Store} from 'store/types';
import {setScreenType} from 'store/actions';

import {useDispatch} from 'react-redux';

import determineType from 'utility/determine-screen-type';

//------------------------------------------------------------------------------

export default function useResponsive() {
  const [current, setCurrent] = React.useState<Store.State['screenType']>(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // End effect if hydration didn't happen yet
    if (typeof window === undefined) return;

    // Initiallize current screen type after hydration
    setCurrent(determineType(window.innerWidth));

    // Event that waches the resizing of the window and sets state accordingly
    const resizeListener = () => setCurrent(determineType(window.innerWidth));

    window.addEventListener('resize', resizeListener);

    // Clear event at unmounting to prevent memory leaks
    return () => window.removeEventListener('resize', resizeListener);
  }, [dispatch]);

  React.useEffect(() => {
    // Set store state only when the current screen type changes
    current && dispatch(setScreenType(current));
  }, [dispatch, current]);
}
