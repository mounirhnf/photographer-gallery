//------------------------------------------------------------------------------
// This hook gets the dallery data from the apps static props and sets it to
// the store
//------------------------------------------------------------------------------

import React from 'react';

import {useDispatch} from 'react-redux';
import {setGalleryData} from 'store/actions';

//------------------------------------------------------------------------------

export default function useGallery(gallery: Shared.GalleryItem[]) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setGalleryData(gallery));
  }, []);
}
