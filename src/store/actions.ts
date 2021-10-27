import {Store} from 'store/types';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setScreenType: 'SET_SCREEN_TYPE',
  setCurrentContext: 'SET_CURRENT_CONTEXT',
  setNoOverflow: 'SET_NO_OVERFLOW',
  setShowScrollReset: 'SET_SHOW_SCROLL_RESET',
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
