import React from 'react';

import {IconType} from 'react-icons';

//------------------------------------------------------------------------------

const Icon: React.FC<IconProps> = (props) => {
  const {
    prefix: Prefix,
    className,
    onClick,
  } = props;

  return <Prefix {...{className, onClick}} aria-hidden />;
}

//------------------------------------------------------------------------------

interface IconProps {
  prefix: IconType;
  className?: string;
  onClick?: (event?: React.MouseEvent<SVGElement>) => void;
};

//------------------------------------------------------------------------------

export default Icon;
