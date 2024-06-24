import React from "react";

import s from './applicationPage.module.scss';
import ApplicationTable from "./ui/ApplicationTable";
import Pagination from "./ui/Pagination";

const ApplicationPage: React.FC = () => {
    return(
        <main className={s.content}>
            <h1>Журнал заявок</h1>
            <ApplicationTable/>
            <Pagination/>
        </main>
    );
}

export default ApplicationPage;