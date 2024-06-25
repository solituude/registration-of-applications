import React from "react";

import s from './panel.module.scss';
const Panel: React.FC = () => {
    return(
        <div className={s.panel__container}>
            <div className={s.panel__header}>
                <h1>Журнал заявок</h1>
                <button>Новая заявка</button>
            </div>

            {/*<div className={s.panel__main}>*/}
            {/*    <button>-Удалить</button>*/}
            {/*    <button>Редактировать</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Panel;