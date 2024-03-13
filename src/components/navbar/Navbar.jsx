import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss';
import ImagesComponents from '../UI/imagesComponents/ImagesComponents';
import Logo from '../../images/logo.png';
import Icons from '../UI/icons/Icons';

const navLinks = [
    { title: 'Обо мне', path: '/about' },
    { title: 'Наставничество', path: '/mentorship' },
    { title: 'Мероприятия', path: '/events' },
    { title: 'Кейсы', path: '/cases' },
    { title: 'Отзывы', path: '/reviews' },
    { title: 'Контакты', path: '/contacts' },
];

export default function Navbar() {
    return (
        <div className={classes.Navbar}>
            <ImagesComponents src={Logo} className={classes.Logo}/>
            <nav className={classes.menu}>
                <ul>
                    {navLinks.map(link => (
                        <li key={link.title}>
                            <NavLink to={link.path} activeClassName={classes.active}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={classes.phone}>
                <div>
                    <Icons name=" bi-list" style={{ fontSize: '20px' }} className={classes.burger} />
                </div>
                <div>
                    <Icons name=" bi-telephone" style={{ fontSize: '20px' }} />
                </div>

                <p>8-345-123-34-45</p>
            </div>
        </div>
    );
}