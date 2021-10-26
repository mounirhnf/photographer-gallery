import React from 'react';
import ReactDOM from 'react-dom';

import cls from './portal.module.scss';

//------------------------------------------------------------------------------

const Portal: React.FC = (props) => {
  const {
    children,
  } = props;

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div className={cls['root']}>{children}</div>,
    document.getElementById('__next') as Element,
  );
}

//------------------------------------------------------------------------------

export default Portal;
