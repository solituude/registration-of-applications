import React from "react";
import {useNavigate} from "react-router-dom";

import addAppIcon from '../lib/icons/addAppIcon.svg';

import s from './panel.module.scss';

export const Panel: React.FC = () => {
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate('/statement/add');
    }

    return(
        <div className={s.panel__container}>
            <div className={s.panel__header}>
                <h1>Журнал заявок</h1>
                <button onClick={handleOpen} className={s.new_app__button}>
                    <img src={addAppIcon} alt="addApp" className={s.new_app__icon}/>
                    <span className={s.new_app__label}>
                        Новая заявка
                    </span>
                </button>
            </div>
        </div>
    )
};