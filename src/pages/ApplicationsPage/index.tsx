import React, {useEffect} from "react";

import s from './applicationPage.module.scss';
import ApplicationTable from "./ui/ApplicationTable";
import Pagination from "./ui/Pagination";
import {useUnit} from "effector-react";
import {$currApplicationsGetStatus, getCurrApplicationsFx} from "./model";

const ApplicationPage: React.FC = () => {
    const { loading, error, data } = useUnit($currApplicationsGetStatus);

    // Делаем запрос на бек на didMount
    useEffect(() => {
        getCurrApplicationsFx(1)
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return(
        <main className={s.main__container}>
            <h1>Журнал заявок</h1>
            <ApplicationTable applications={data.data}/>
            <Pagination/>
        </main>
    );
}

export default ApplicationPage;