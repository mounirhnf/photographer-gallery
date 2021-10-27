import React from 'react';
import {Store} from 'store/types';

import {useDispatch, useSelector} from 'react-redux';

import {setCurrentContext} from 'store/actions';

import useNavigation from 'hooks/use-navigation';

import Button from 'elements/complex/button';
import SocialIcon from 'elements/complex/social-icon';

import {
  FaInfoCircle as AboutIcon,
  FaEnvelope as ContactIcon,
} from 'react-icons/fa';

import {env} from 'configs';

import buildClass from 'utility/build-class';

import cls from './jumbotron.module.scss';

//------------------------------------------------------------------------------

const Jumborton: React.FC = () => {
  const screenType = useSelector((store: Store.State) => store.screenType);
  const noOverflow = useSelector((store: Store.State) => store.noOverflow);
  const dispatch = useDispatch();

  const coverRef = React.useRef<HTMLImageElement | null>(null);

  const {goToGallery} = useNavigation();

  const classes = buildClass(
    cls['root'],
    noOverflow && cls['offset'],
    screenType === 'xs' && cls['root-xs'],
  );

  const openModal = (id: 'about' | 'contact') => {
    dispatch(setCurrentContext(`no-click-away_section-${id}`))
  };

  React.useEffect(() => {
    function slider(this: Window) {
      if (this.scrollY <= coverSlideThreshold && coverRef.current) {
        coverRef.current.style.transform = `scale(${1 + (this.scrollY / 5000)})`;
        coverRef.current.style.top = `${window.scrollY / 2}px`;
      }
    };

    window.addEventListener('scroll', slider);

    return () => window.removeEventListener('scroll', slider);
  }, []);

  return (
    <header className={classes}>
      <img
        className={cls['avatar']}
        src={`${env.host}/img/ui/avatar.jpg`}
        alt='avatar'
      />
      <h1 className={cls['name']}>JOHN DOE</h1>
      <h2 className={cls['proffession']}>Professional Photographer</h2>
      <ul className={cls['socials']}>
        {socialLinks.map(({id, url}) => {
          return (
            <li key={id} className={cls['social-w']}>
              <a  title={id}
                  className={cls['social']}
                  href={url}
                  target='_blank'
                  rel='noreferrer noopener'>
                <SocialIcon className={cls['social-icon']} name={id} />
              </a>
            </li>
          );
        })}
      </ul>
      <Button
          className={cls['button']}
          icon={AboutIcon}
          onClick={() => openModal('about')}>
        More about me
      </Button>
      <Button
          className={cls['button']}
          icon={ContactIcon}
          outlined
          onClick={() => openModal('contact')}>
        Contact me
      </Button>
      <div
        title='Scroll Down'
        className={cls['mouse']}
        onClick={goToGallery}
      />
      <img
        ref={coverRef}
        className={cls['cover']}
        src={`${env.host}/img/ui/cover.jpg`}
        alt='cover'
      />
      <div className={cls['overlay']} />
    </header>
  );
}

//------------------------------------------------------------------------------

const coverSlideThreshold = 800;
const socialLinks = [
  {id: 'twitter', url: 'https://www.twitter.com/'},
  {id: 'instagram', url: 'https://www.instagram.com/'},
  {id: 'facebook', url: 'https://www.facebook.com/'},
];

//------------------------------------------------------------------------------

export default Jumborton;
