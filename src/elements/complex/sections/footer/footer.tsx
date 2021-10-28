import React from 'react';
import {Store} from 'store/types';

import {useSelector} from 'react-redux';

import SocialLinks from 'elements/complex/social-links';

import buildClass from 'utility/build-class';

import cls from './footer.module.scss';

//------------------------------------------------------------------------------

const Footer: React.FC = () => {
  const noOverflow = useSelector((store: Store.State) => store.noOverflow);

  const classes = buildClass(
    cls['root'],
    noOverflow && cls['offset'],
  );
  
  return (
    <footer className={classes}>
      <SocialLinks className={cls['socials']} />
      <span className={cls['copyright']}>
        Mounir Hanafi &copy; {currentYear} • All Rights Reserved
      </span>
    </footer>
  );
}

//------------------------------------------------------------------------------

const currentYear = new Date().getFullYear();

//------------------------------------------------------------------------------

export default Footer;
