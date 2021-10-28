import React from 'react';

import SocialIcon from 'elements/complex/social-icon';

import {socialLinks} from 'configs';

import buildClass from 'utility/build-class';

import cls from './social-links.module.scss';

//------------------------------------------------------------------------------

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
  const {
    className,
  } = props;

  const classes = buildClass(
    className,
    cls['root'],
  );

  return (
    <ul className={classes}>
      {socialLinks.map(({id, url}) => {
        return (
          <li key={id}>
            <a  title={id}
                className={cls['link']}
                href={url}
                target='_blank'
                rel='noreferrer noopener'>
              <SocialIcon className={cls['link-icon']} name={id} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

//------------------------------------------------------------------------------

interface SocialLinksProps {
  className?: string;
}

//------------------------------------------------------------------------------

export default SocialLinks;
