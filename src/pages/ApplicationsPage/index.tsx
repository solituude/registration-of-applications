import React, {useEffect} from "react";
import {useUnit} from "effector-react";
import {$currApplicationsGetStatus, getCurrApplicationsFx} from "./model";
import {$currPage} from '../../shared/model';

import Panel from "./ui/Panel";
import ApplicationTable from "./ui/ApplicationTable";
import Pagination from "../../shared/ui/Pagination";

import s from './applicationPage.module.scss';
import {Outlet} from "react-router-dom";

const ApplicationPage: React.FC = () => {
    const { loading, error, data } = useUnit($currApplicationsGetStatus);
    const currPage = useUnit($currPage);

    useEffect(() => {
        getCurrApplicationsFx(currPage);
    }, [currPage]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return(
        <main className={s.main__container}>
            <Panel/>
            <ApplicationTable applications={data.data}/>
            <Pagination countPages={data.pages} next={data.next} prev={data.prev}/>
            <Outlet/>
        </main>
    );
}

export default ApplicationPage;