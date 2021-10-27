import React from 'react';
import {IconType} from 'react-icons';

import Icon from 'elements/simple/icon';

import buildClass from 'utility/build-class';

import cls from './form-element.module.scss';

//------------------------------------------------------------------------------

const FormElement: React.FC<FormElementProps> = (props) => {
  const {
    className,
    id,
    type,
    label,
    placeholder,
    value,
    icon,
    disabled,
    required,
    autoFocus,
    onChange,
  } = props;

  const [isFocused, setIsFocused] = React.useState(autoFocus);

  const classes = buildClass(
    className,
    cls['root'],
    (isFocused && !disabled) && cls['focused'],
    disabled && cls['disabled'],
    type === 'area' && cls['area'],
    required && cls['required'],
  );

  const Field = type === 'area' ? 'textarea' : 'input';
  
  return (
    <div className={classes}>
      <label className={cls['label']} htmlFor={id}>{label}</label>
      <div className={cls['field-w']}>
        {icon && type !== 'area' && <Icon
          className={cls['icon']}
          prefix={icon}
        />}
        <Field
          {...{id, value, disabled, autoFocus, placeholder}}
          className={cls['field']}
          type={type !== 'area' ? type : undefined}
          name={id}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={!disabled ? onChange : undefined}
        />
      </div>
    </div>
  );
}

//------------------------------------------------------------------------------

interface FormElementProps {
  className?: string;
  id: string;
  type: 'text' | 'email' | 'area';
  label: string;
  placeholder: string;
  value: string;
  icon: IconType;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

//------------------------------------------------------------------------------

export default FormElement;
