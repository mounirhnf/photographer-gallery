import {useDispatch} from 'react-redux';

import {seekGallery} from 'store/actions';

//------------------------------------------------------------------------------

export default function useNavigation() {
  const dispatch = useDispatch();

  return {
    goToGallery: () => dispatch(seekGallery(true)),
    resetScroll: () => window.scrollTo({top: 0, behavior: 'smooth'}),
  };
}
