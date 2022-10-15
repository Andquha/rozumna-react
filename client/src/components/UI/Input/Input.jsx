import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {

    const rootClasses = [classes.Input];

    if(props.error){
        rootClasses.push(classes.error);
    }

    return (
        <input className={rootClasses.join(" ")} {...props}/>
    )
}

export default Input;