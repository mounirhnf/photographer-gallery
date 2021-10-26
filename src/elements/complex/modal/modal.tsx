import React from 'react';

import Icon from 'elements/simple/icon';

import {IoMdClose as CloseIcon} from 'react-icons/io';

import cls from './modal.module.scss';

//------------------------------------------------------------------------------

const Modal: React.FC<ModalProps> = (props) => {
  const {
    title,
    onClose,
    children,
  } = props;

  const modalRef = React.useRef(null);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.target === modalRef.current && onClose();
  };

  React.useEffect(() => {
    const escape = (event: globalThis.KeyboardEvent) => {
      event.key === 'Escape' && onClose();
    };

    window.addEventListener('keydown', escape);

    return () => window.removeEventListener('keydown', escape);
  }, [onClose]);

  return (
    <div
        ref={modalRef}
        className={cls['root']}
        onMouseDown={handleClose}>
      <div className={cls['box']}>
        <div className={cls['header']}>
          <h1 className={cls['title']}>{title}</h1>
          <div className={cls['close-w']} onClick={onClose}>
            <Icon className={cls['close-icon']} prefix={CloseIcon} />
          </div>
        </div>
        <div className={cls['body']}>{children}</div>
      </div>
    </div>
  );
}

//------------------------------------------------------------------------------

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

//------------------------------------------------------------------------------

export default Modal;
