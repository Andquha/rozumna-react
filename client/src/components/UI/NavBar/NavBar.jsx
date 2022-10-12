import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo';
import './NavBar.scss';

export default function NavBar() {
    const [hiden, setHiden] = useState(false);

  return (
    <header className='Header'>
        <div className='NavBar'>
            <div className='NavBar_container _container'>
                <Logo />
                <div className='NavBar_btns'>
                    <div className='NavBar_btns_box'>
                        <div onClick={() => setHiden(!hiden)} style={!hiden?{color: `#000`}:{color: `#6382cf`}}>Меню</div>
                        <div>Про нас</div>
                    </div>
                    <div className='NavBar_btns_login'>
                        <Link to="/login">Авторизуватися</Link>
                    </div>
                </div>
            </div>
        </div>   
        <div className='NavBar_bottom' style={!hiden?{marginTop: '-5.1rem'}:{marginTop: 0}}>
            <div className='NavBar_links_container _container'>
                <div className='NavBar_links'>
                    <NavLink to="/document">Документи</NavLink>
                    <NavLink to="/people">Пошук людей</NavLink>
                    <NavLink to="/shtabi">Гуманітарні штаби</NavLink>
                    <NavLink to="/shliahi-evakuaciy">Шляхи евакуації</NavLink>
                    <NavLink to="/doluchitis">Приєднатись</NavLink>
                    <NavLink to="/partner">Партнери</NavLink>
                    <NavLink to="/pravova-dopomoga">Правова допомога</NavLink>
                    <NavLink to="/psycholog-dopomoga">Психологічна допомога</NavLink>
                    <a target='blank' href="https://www.facebook.com/bf.rozumna.syla">Новини</a>
                    <NavLink to="/faq">Питання</NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}
