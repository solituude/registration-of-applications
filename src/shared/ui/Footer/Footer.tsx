import React from "react";
import s from './footer.module.scss';

const Footer: React.FC = () => {
    return(
        <footer className={s.footer__container}>
            <span className={s.footer__text}>
                GitHub: <a className={s.footer__link}
                           href={'https://github.com/solituude/registration-of-applications'}>@solituude</a>
            </span>
        </footer>
    );
}

export default Footer;