//------------------------------------------------------------------------------
// This is a utility function that determines the current screen type based
// on the window width
//------------------------------------------------------------------------------

import {Store} from 'store/types'; 

import {windowBreakpoints} from 'configs';

//------------------------------------------------------------------------------

export default function determineScreenType(
  width: number,
): Store.State['screenType'] {
  switch (true) {
    case width > windowBreakpoints['lg']: return 'xl';
    case width > windowBreakpoints['md']: return 'lg';
    case width > windowBreakpoints['sm']: return 'md';
    case width > windowBreakpoints['xs']: return 'sm';
    default: return 'xs';
  }
}
