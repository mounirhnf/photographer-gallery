import React from 'react';

import {useDispatch} from 'react-redux';

import {setShowScrollReset} from 'store/actions';

//------------------------------------------------------------------------------

export default function useScrollReset() {
  const [temp, setTemp] = React.useState(false);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    // Set default state
    window && setTemp(document.documentElement.scrollTop >= 100 || false);

    // Add listner that waches the scroll and sets the scroll reset state
    const scrollListner = () => {
      const currentScroll = document.documentElement.scrollTop;

      setTemp(currentScroll >= 100);
    };

    window.addEventListener('scroll', scrollListner);

    // Clear scroll event on unmounting to prevent memory leaks
    return () => window.removeEventListener('scroll', scrollListner);
  }, []);

  React.useEffect(() => {
    // Set the store state to the calculated state
    dispatch(setShowScrollReset(temp));
  }, [dispatch, temp]);
}
