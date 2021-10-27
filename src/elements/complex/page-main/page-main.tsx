import React from 'react';
import {Store} from 'store/types';

import {useDispatch, useSelector} from 'react-redux';

import {setCurrentContext} from 'store/actions';

import LoadingFeedback from 'elements/simple/loading-feedback';
import ScrollReset from 'elements/simple/scroll-reset';
import Portal from 'elements/simple/portal';
import Modal from 'elements/complex/modal';

import Jumbotron from 'elements/complex/sections/jumbotron';
import Gallery from 'elements/complex/sections/gallery';
import About from 'elements/complex/sections/about';
import Contact from 'elements/complex/sections/contact';

import buildClass from 'utility/build-class';

import cls from './page-main.module.scss';

//------------------------------------------------------------------------------

const Main: React.FC = () => {
  const screenType = useSelector((store: Store.State) => store.screenType);
  const context = useSelector((store: Store.State) => store.currentContext);
  const dispatch = useDispatch();

  const mainClasses = buildClass(
    cls['main'],
    !screenType && cls['loading'],
  );

  return (
    <>
      {!screenType && <LoadingFeedback />}
      <main className={mainClasses}>
        <Jumbotron />
        <Gallery />
        {context && context.includes('section') && <Portal>
          <Modal
              title={modalTitles[context]}
              onClose={() => dispatch(setCurrentContext(null))}>
            {context === 'no-click-away_section-about' ?
              <About /> :
              <Contact />
            }
          </Modal>
        </Portal>}
        <ScrollReset />
      </main>
    </>
  );
}

//------------------------------------------------------------------------------

const modalTitles: {[key: string]: string} = {
  'no-click-away_section-about': 'about me',
  'no-click-away_section-contact': 'contact me',
};

//------------------------------------------------------------------------------

export default Main;
