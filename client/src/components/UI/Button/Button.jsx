import React, { useState } from 'react';
import classes from './Button.module.scss';

const Button = ({children, stateBtn}) => {
    const rootClasses = [classes.Button];

    if(stateBtn){
        rootClasses.push(classes.active);
    }

    return (
        <button className={rootClasses.join(" ")} >
            {children}
        </button>
    )
}

export default Button;
