import React, {useEffect} from "react";
import {useUnit} from "effector-react";
import {$currApplicationsGetStatus, getCurrApplicationsFx} from "./model/currApplicationsModel";
import {$currPage} from "./model/currPageModel";

import Panel from "./ui/Panel/Panel";
import ApplicationTable from "./ui/ApplicationTable/ApplicationTable";
import Pagination from "../../shared/ui/Pagination/Pagination";

import s from './applicationPage.module.scss';
import {Outlet} from "react-router-dom";

const ApplicationPage: React.FC = () => {
    const { loading, error, data } = useUnit($currApplicationsGetStatus);
    const currPage = useUnit($currPage);

    useEffect(() => {
        getCurrApplicationsFx(currPage);
        // getAllApplicationsFx().then(r => console.log(r));
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