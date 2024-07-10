import React from "react";
import {useNavigate} from "react-router-dom";

import addAppIcon from '../lib/icons/addAppIcon.svg';

import s from './panel.module.scss';
import {Search} from "features/search";

export const Panel: React.FC = () => {
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate('/statement/add');
    }

    return(
        <div className={s.panel__container}>
            <h1>Журнал&nbsp;заявок</h1>
            <div className={s.panel__main}>
                <Search/>
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