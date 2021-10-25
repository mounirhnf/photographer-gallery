export namespace Store {
  export interface State {}

  export interface Actions {}

  type NextHydrationAction = '__NEXT_REDUX_WRAPPER_HYDRATE__';

  export type ActionType = Actions[keyof Actions] | NextHydrationAction;

  interface Payload {};

  export interface Action {
    readonly type: Actions[keyof Actions];
    readonly payload: Payload;
  }
}
