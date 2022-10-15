import React from 'react'
import { Link } from 'react-router-dom';
import classes from './BigLogo.module.scss';

export default function BigLogo() {
  
  return (
    <Link to="/" className={classes.BigLogo}>
        <img src="img/Logo/BigLogo.svg" alt="Logo" />
    </Link>
  )
}
