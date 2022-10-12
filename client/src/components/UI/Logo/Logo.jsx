import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss';

export default function Logo() {
  
  return (
    <Link to="/" className={classes.Logo}>
        <img src="img/Logo/Logo.svg" alt="Logo" />
    </Link>
  )
}
