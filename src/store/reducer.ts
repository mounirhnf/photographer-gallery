import {Store} from 'store/types';
import defaults from 'store/defaults';
import {actions} from 'store/actions';

//------------------------------------------------------------------------------

export default function reducer(
  state: Store.State = defaults,
  {type, payload}: Store.Action,
): Store.State {
  switch (type) {
    case actions.setScreenType:
      return {
        ...state,
        screenType: payload.screenType,
      };
    case actions.setCurrentContext:
      return {
        ...state,
        currentContext: payload.context,
      };
    case actions.setNoOverflow:
      return {
        ...state,
        noOverflow: payload.noOverflow,
      };
    case actions.setShowScrollReset:
      return {
        ...state,
        showScrollReset: payload.show,
      };
    case actions.setGalleryData:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          data: payload.data,
        },
      };
    case actions.seekGallery:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          seek: payload.seek,
        },
      };
    case actions.setGalleryFilter:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          filter: payload.filter,
        },
      };
    case actions.setGalleryPreview:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          currentPreviewId: payload.previewId,
        },
      };
    default:
      return state;
  }
}
