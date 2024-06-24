import React from "react";
import s from './navbar.module.scss';
import logIcon from '../../shared/ui/icons/logNavbarIcon.svg';
import mapIcon from '../../shared/ui/icons/mapNavbarIcon.svg';

const Navbar: React.FC = () => {
    return(
        <nav className={s.container}>
            <div className={s.nav__element}>
                <a href='/statement' className={s.nav__a}>
                    <img src={logIcon} className={s.nav__icon} alt="log"/>
                </a>
            </div>

            <div className={s.nav__element}>
                <a href='/map/<x>/<y>/<zoom>' className={s.nav__a}>
                    <img src={mapIcon} className={s.nav__icon} alt="log"/>
                </a>
            </div>

        </nav>
    );
}

export default Navbar;