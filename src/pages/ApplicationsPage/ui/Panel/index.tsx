import React from "react";

import s from './panel.module.scss';
import {useNavigate} from "react-router-dom";
const Panel: React.FC = () => {
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate('/statement/add');
    }

    return(
        <div className={s.panel__container}>
            <div className={s.panel__header}>
                <h1>Журнал заявок</h1>
                <button onClick={handleOpen}>Новая заявка</button>
            </div>
        </div>
    )
}

export default Panel;