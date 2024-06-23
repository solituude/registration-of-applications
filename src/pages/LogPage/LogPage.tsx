import React from "react";

import s from './logPage.module.scss';
import LogTable from "../../components/LogTable/LogTable";
import Pagination from "../../components/Pagination/Pagination";

const LogPage: React.FC = () => {
    return(
        <div className={s.content}>
            <h1>Журнал заявок</h1>
            <LogTable/>
            <Pagination/>
        </div>
    );
}

export default LogPage;