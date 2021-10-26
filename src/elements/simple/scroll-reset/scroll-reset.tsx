import React from 'react';
import {Store} from 'store/types';

import {useSelector} from 'react-redux';

import useNavigation from 'hooks/use-navigation';

import Icon from 'elements/simple/icon';

import {FaAngleUp as ArrowIcon} from 'react-icons/fa';

import buildClass from 'utility/build-class';

import cls from './scroll-reset.module.scss';

//------------------------------------------------------------------------------

const ScrollReset: React.FC = () => {
  const show = useSelector((store: Store.State) => store.showScrollReset);
  const noOverflow = useSelector((store: Store.State) => store.noOverflow);

  const {resetScroll} = useNavigation();

  const classes = buildClass(
    cls['root'],
    show && cls['show'],
    noOverflow && cls['offset'],
  );

  return (
    <button
        title='To The Top'
        className={classes}
        onClick={() => resetScroll()}>
      <Icon className={cls['arrow']} prefix={ArrowIcon} />
    </button>
  );
}

//------------------------------------------------------------------------------

export default ScrollReset;
