import {Dispatch} from 'redux';
import {Store} from 'store/types';

import * as api from 'api';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setScreenType: 'SET_SCREEN_TYPE',
  setCurrentContext: 'SET_CURRENT_CONTEXT',
  setNoOverflow: 'SET_NO_OVERFLOW',
  setShowScrollReset: 'SET_SHOW_SCROLL_RESET',
  setContactFormIsSubmitting: 'SET_CONTACT_FORM_IS_SUBMITTING',
  setContactFormValue: 'SET_CONTACT_FORM_VALUE',
  clearContactForm: 'CLEAR_CONTACT_FORM',
  submitContactForm: 'SUBMIT_CONTACT_FORM',
  setGalleryData: 'SET_GALLERY_DATA',
  seekGallery: 'SEEK_GALLERY',
  setGalleryFilter: 'SET_GALLERY_FILTER',
  setGalleryPreview: 'SET_GALLERY_PREVIEW',
};

//------------------------------------------------------------------------------

export function setScreenType(
  screenType: Store.State['screenType'],
): Store.ScreenTypeAction {
  return {
    type: actions.setScreenType,
    payload: {
      screenType,
    },
  };
}

//------------------------------------------------------------------------------

export function setCurrentContext(
  context: string | null,
): Store.ContextAction {
  return {
    type: actions.setCurrentContext,
    payload: {
      context,
    },
  };
}

//------------------------------------------------------------------------------

export function setNoOverflow(
  noOverflow: boolean,
): Store.OverflowAction {
  return {
    type: actions.setNoOverflow,
    payload: {
      noOverflow,
    },
  };
}

//------------------------------------------------------------------------------

export function setShowScrollReset(
  show: boolean,
): Store.ScrollResetAction {
  return {
    type: actions.setShowScrollReset,
    payload: {
      show,
    },
  };
}

//------------------------------------------------------------------------------

export function setContactFormIsSubmitting(
  isSubmitting: boolean,
): Store.ContactFormSubmittingAction {
  return {
    type: actions.setContactFormIsSubmitting,
    payload: {
      isSubmitting,
    },
  };
}

//------------------------------------------------------------------------------

export function setContactFormValue(
  id: string,
  value: string,
): Store.ContactFormValueAction {
  return {
    type: actions.setContactFormValue,
    payload: {
      id,
      value,
    },
  };
}

//------------------------------------------------------------------------------

export function submitContactForm(
  values: Store.State['contactForm']['values']
): (dispatch: Dispatch) => void {
  return async (dispatch) => {
    dispatch(setContactFormIsSubmitting(true));

    // TODO: Validate form values
    
    try {
      const response = await api.sendMessage(values);

      // This is the api response you can store the messages in the server side
      // or create your own api
      console.log(response);

      dispatch({type: actions.clearContactForm});
    } catch(error) {
      console.error(error);
      dispatch({type: actions.clearContactForm});
    }
  };
}

//------------------------------------------------------------------------------

export function setGalleryData(
  data: Shared.GalleryItem[],
): Store.GalleryDataAction {
  return {
    type: actions.setGalleryData,
    payload: {
      data,
    },
  };
}

//------------------------------------------------------------------------------

export function seekGallery(seek: boolean): Store.GallerySeekAction {
  return {
    type: actions.seekGallery,
    payload: {
      seek,
    },
  };
}

//------------------------------------------------------------------------------

export function setGalleryFilter(filter: string): Store.GalleryFilterAction {
  return {
    type: actions.setGalleryFilter,
    payload: {
      filter,
    },
  };
}

//------------------------------------------------------------------------------

export function setGalleryPreview(
  previewId: number | null,
): Store.GalleryPreviewAction {
  return {
    type: actions.setGalleryPreview,
    payload: {
      previewId,
    },
  };
}
