import {Store} from 'store/types';

//------------------------------------------------------------------------------

const defaults: Store.State = {
  screenType: null,
  currentContext: null,
  gallery: {
    data: [],
    seek: false,
    filter: 'all',
    currentPreviewId: null,
  },
};

//------------------------------------------------------------------------------

export default defaults;
