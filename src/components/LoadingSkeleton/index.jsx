import React from 'react';
import classes from './LoadingSkeleton.module.css';

function LoadingSkeleton(props) {
  return (
    <div className={classes.loadingSkeleton}>
        <img src="/loadingSkeleton.gif" alt="" />
    </div>
  );
}

export default LoadingSkeleton;