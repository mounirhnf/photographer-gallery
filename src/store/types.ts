export namespace Store {
  export interface State {
    readonly screenType: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | null;
    readonly currentContext: string | null;
    readonly gallery: {
      readonly data: Shared.GalleryItem[];
      readonly seek: boolean;
      readonly filter: string;
      readonly currentPreviewId: number | null;
    };
  }

  export interface Actions {
    readonly setScreenType: 'SET_SCREEN_TYPE';
    readonly setCurrentContext: 'SET_CURRENT_CONTEXT';
    readonly setGalleryData: 'SET_GALLERY_DATA';
    readonly seekGallery: 'SEEK_GALLERY';
    readonly setGalleryFilter: 'SET_GALLERY_FILTER';
    readonly setGalleryPreview: 'SET_GALLERY_PREVIEW';
  }

  type NextHydrationAction = '__NEXT_REDUX_WRAPPER_HYDRATE__';

  export type ActionType = Actions[keyof Actions] | NextHydrationAction;

  interface ScreenTypePayload {readonly screenType: Store.State['screenType']}
  interface ContextPayload {readonly context: string | null}
  interface GalleryDataPayload {readonly data: Shared.GalleryItem[]}
  interface GallerySeekPayload {readonly seek: boolean}
  interface GalleryFilterPayload {readonly filter: string}
  interface GalleryPreviewPayload {
    readonly id: State['gallery']['currentPreviewId'];
  }

  interface Payload extends
    ScreenTypePayload,
    ContextPayload,
    GalleryDataPayload,
    GallerySeekPayload,
    GalleryFilterPayload,
    GalleryPreviewPayload {};

  export interface Action<P = Payload> {
    readonly type: Actions[keyof Actions];
    readonly payload: P;
  }

  export interface ScreenTypeAction extends Action<ScreenTypePayload> {};
  export interface ContextAction extends Action<ContextPayload> {};
  export interface GalleryDataAction extends Action<GalleryDataPayload> {};
  export interface GallerySeekAction extends Action<GallerySeekPayload> {};
  export interface GalleryFilterAction extends Action<GalleryFilterPayload> {};
  export interface GalleryPreviewAction extends Action<GalleryPreviewPayload> {};
}
