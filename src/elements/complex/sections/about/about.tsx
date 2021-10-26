import React from 'react';
import {Store} from 'store/types';
import {IconType} from 'react-icons';

import {useSelector} from 'react-redux';

import Icon from 'elements/simple/icon';

import {
  FaUserAlt as NameIcon,
  FaBriefcase as ProfessionIcon,
  FaPhoneAlt as PhoneIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';

import {env} from 'configs';

import buildClass from 'utility/build-class';

import classes from './about.module.scss';

//------------------------------------------------------------------------------

const About: React.FC = () => {
  const screenType = useSelector((store: Store.State) => store.screenType);

  const rootClasses = buildClass(
    classes['root'],
    screenType === 'xs' && classes['root-xs'],
  );

  return (
    <div className={rootClasses}>
      <div className={classes['profile-card']}>
        <img
          className={classes['avatar']}
          src={`${env.host}/img/ui/avatar.jpg`}
          alt='avatar'
        />
        <ul className={classes['info-list']}>
          <li className={classes['info']}>
            <Icon className={classes['info-icon']} prefix={iconsMap['name']} />
            JOHN DOE
          </li>
          <li className={classes['info']}>
            <Icon className={classes['info-icon']} prefix={iconsMap['pro']} />
            Professional photographer
          </li>
          {contactLinks.map(({id, action, value}, key) => {
            return (
              <li key={key}>
                <a  className={buildClass(classes['info'], classes['link'])}
                    href={`${action}:${value}`}>
                  <Icon
                    className={classes['info-icon']}
                    prefix={iconsMap[id]}
                  />
                  {value}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <h2 className={classes['sub-title']}>Who am i ?</h2>
      <p className={classes['description']}>
        Hi, i am JOHN DOE a professional photographer Id officia qui irure id
        et pariatur officia non. Cillum non officia voluptate esse. Voluptate
        pariatur in incididunt aliquip ut quis consectetur non. Laborum elit et
        veniam nostrud labore. Amet non pariatur dolore consequat non voluptate
        esse occaecat consequat aute.
      </p>
      <h2 className={classes['sub-title']}>My Skills</h2>
      <ul className={classes['skills']}>
        {skills.map((skill, key) => {
          return (
            <li key={key} className={classes['skill']}>
              <img
                className={classes['skill-icon']}
                src={`${env.host}/img/ui/skills/${skill}.png`}
                alt='skill'
              />
              <span className={classes['skill-value']}>{skill}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

//------------------------------------------------------------------------------

const iconsMap: {[key: string]: IconType} = {
  'name': NameIcon,
  'pro': ProfessionIcon,
  'phone': PhoneIcon,
  'email': EmailIcon,
};

const skills: string[] = [
  'photography',
  'photo-editing',
  'retouching',
  'lighting',
];

const contactLinks = [
  {
    id: 'phone',
    action: 'tel',
    value: '(+1) 613-555-0143',
  },
  {
    id: 'email',
    action: 'mailto',
    value: 'johndoe@email.com',
  },
];

//------------------------------------------------------------------------------

export default About;
