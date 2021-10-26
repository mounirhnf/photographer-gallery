import {Store} from 'store/types';

//------------------------------------------------------------------------------

const defaults: Store.State = {
  screenType: null,
  currentContext: null,
  noOverflow: false,
  showScrollReset: false,
  gallery: {
    data: [],
    seek: false,
    filter: 'all',
    currentPreviewId: null,
  },
};

//------------------------------------------------------------------------------

export default defaults;
