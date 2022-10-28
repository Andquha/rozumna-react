import React from 'react';
import classes from './SmallButton.module.scss';

const SmallButton = ({active, ...props}) => {
    const rootClasses = [classes.SmallButton];

    if(active){
        rootClasses.push(classes.active)
    }

    return (
        <button {...props} className={rootClasses.join(" ")}>
            {props.children}
        </button>
    )
}

export default SmallButton;