import React from "react";
import s from './navbar.module.scss';
import {logNavbarIcon, mapNavbarIcon} from 'shared/lib';

export const Navbar: React.FC = () => {
    return(
        <nav className={s.container}>
            <div className={s.nav__element}>
                <a href='/statement' className={s.nav__a}>
                    <img src={logNavbarIcon} className={s.nav__icon} alt="log"/>
                </a>
            </div>

            <div className={s.nav__element}>
                <a href='/map/<x>/<y>/<zoom>' className={s.nav__a}>
                    <img src={mapNavbarIcon} className={s.nav__icon} alt="log"/>
                </a>
            </div>

        </nav>
    );
}