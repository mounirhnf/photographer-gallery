import {Store} from 'store/types';

//------------------------------------------------------------------------------

const defaults: Store.State = {
  screenType: null,
  currentContext: null,
  noOverflow: false,
  showScrollReset: false,
  contactForm: {
    isSubmitting: false,
    values: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  },
  gallery: {
    data: [],
    seek: false,
    filter: 'all',
    previewed: null,
  },
};

//------------------------------------------------------------------------------

export default defaults;
