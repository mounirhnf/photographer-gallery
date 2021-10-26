import React from 'react';
import {IconType} from 'react-icons';

import Icon from 'elements/simple/icon';

import {
  FaTwitter as TwitterIcon,
  FaInstagram as InstagramIcon,
  FaFacebookF as FacebookIcon,
} from 'react-icons/fa';

//------------------------------------------------------------------------------

const SocialIcon: React.FC<SocialIconProps> = (props) => {
  const {
    className,
    name,
  } = props;

  return <Icon className={className as string} prefix={socialIcons[name]} />;
}

//------------------------------------------------------------------------------

interface SocialIconProps {
  className?: string;
  name: string;
}

//------------------------------------------------------------------------------

const socialIcons: {[key: string]: IconType} = {
  'twitter': TwitterIcon,
  'instagram': InstagramIcon,
  'facebook': FacebookIcon,
};

//------------------------------------------------------------------------------

export default SocialIcon;
