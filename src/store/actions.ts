import {Store} from 'store/types';

//------------------------------------------------------------------------------

export const actions: Store.Actions = {
  setScreenType: 'SET_SCREEN_TYPE',
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
