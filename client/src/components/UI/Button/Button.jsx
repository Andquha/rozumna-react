import React from 'react';
import classes from './Button.module.scss';

const Button = ({aidFilterAccept, aidFilterProvide, ...props}) => {
    const rootClasses = [classes.Button];

    if(aidFilterAccept){
        rootClasses.push(classes.active)
    }

    if(aidFilterProvide){
        rootClasses.push(classes.active)
    }

    return (
        <button {...props} className={rootClasses.join(" ")}>
            {props.children}
        </button>
    )
}

export default Button;
