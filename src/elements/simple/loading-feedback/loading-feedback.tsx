import React from 'react';

import cls from './loading-feedback.module.scss';

//------------------------------------------------------------------------------

const LoadingFeedback: React.FC = () => {
  return (
    <div className={cls['root']}>
      <div className={cls['loader']} />
    </div>
  );
}

//------------------------------------------------------------------------------

export default LoadingFeedback;
