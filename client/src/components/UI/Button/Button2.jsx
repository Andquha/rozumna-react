import React, { useState } from 'react';
import classes from './Button2.module.scss';

const Button2 = ({children, ...props}) => {
    const rootClasses = [classes.Button2];

    return (
        <button className={rootClasses.join(" ")} {...props}>
            {children}
        </button>
    )
}

export default Button2;
