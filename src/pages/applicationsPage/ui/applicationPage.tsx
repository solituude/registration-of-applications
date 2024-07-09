import React, {useEffect} from "react";
import {useUnit} from "effector-react";
import {getCurrApplicationsFx, $currPage} from "entities/application";

import {Panel} from "widgets/panel";
import {ApplicationTable} from "widgets/applicationTable";
import {Pagination} from "widgets/pagination";

import s from './applicationPage.module.scss';
import {Outlet} from "react-router-dom";

export const ApplicationPage: React.FC = () => {
    const currPage = useUnit($currPage);

    useEffect(() => {
        getCurrApplicationsFx(currPage);
        // getAllApplicationsFx().then(r => console.log(r));
    }, [currPage]);

    return(
        <main className={s.main__container}>
            <Panel/>
            <ApplicationTable/>
            <Pagination/>
            <Outlet/>
        </main>
    );
}