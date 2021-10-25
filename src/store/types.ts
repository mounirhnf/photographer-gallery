export namespace Store {
  export interface State {
    readonly screenType: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | null;
  }

  export interface Actions {
    readonly setScreenType: 'SET_SCREEN_TYPE';
  }

  type NextHydrationAction = '__NEXT_REDUX_WRAPPER_HYDRATE__';

  export type ActionType = Actions[keyof Actions] | NextHydrationAction;

  interface ScreenTypePayload {
    readonly screenType: Store.State['screenType'];
  }

  interface Payload extends ScreenTypePayload {};

  export interface Action<P = Payload> {
    readonly type: Actions[keyof Actions];
    readonly payload: P;
  }

  export interface ScreenTypeAction extends Action<ScreenTypePayload> {};
}
