import {Store} from 'store/types';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setScreenType: 'SET_SCREEN_TYPE',
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
  id: number | null,
): Store.GalleryPreviewAction {
  return {
    type: actions.setGalleryPreview,
    payload: {
      id,
    },
  };
}
