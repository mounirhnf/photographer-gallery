import React from 'react';
import {Store} from 'store/types';

import {useSelector} from 'react-redux';

import LoadingFeedback from 'elements/simple/loading-feedback';

import ScrollReset from 'elements/simple/scroll-reset';

import buildClass from 'utility/build-class';

import cls from './page-main.module.scss';

//------------------------------------------------------------------------------

const Main: React.FC = () => {
  const screenType = useSelector((store: Store.State) => store.screenType);

  const mainClasses = buildClass(
    cls['main'],
    !screenType && cls['loading'],
  );

  return (
    <>
      {!screenType && <LoadingFeedback />}
      <main className={mainClasses}>
        <h1>Photographer</h1>
        <ScrollReset />
      </main>
    </>
  );
}

//------------------------------------------------------------------------------

export default Main;
