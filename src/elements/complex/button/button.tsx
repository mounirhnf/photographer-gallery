import React from 'react';
import {IconType} from 'react-icons/lib';

import Icon from 'elements/simple/icon';

import cls from './button.module.scss';

import buildClass from 'utility/build-class';

//------------------------------------------------------------------------------

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    type = 'button',
    icon,
    disabled,
    outlined,
    onClick,
    children,
  } = props;

  const classes = buildClass(
    className,
    cls['root'],
    outlined && cls['outlined'],
  );

  return (
    <button
        type={type}
        className={classes}
        disabled={disabled}
        onClick={!disabled ? onClick : undefined}>
      {icon && <Icon className={cls['icon']} prefix={icon} />}
      <span className={cls['value']}>{children}</span>
    </button>

  );
}

//------------------------------------------------------------------------------

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  icon?: IconType;
  disabled?: boolean;
  outlined?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

//------------------------------------------------------------------------------

export default Button;
