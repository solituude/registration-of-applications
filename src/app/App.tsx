import React from 'react';
import {Outlet} from "react-router-dom";
import {Navbar} from "shared/ui/navbar";

import s from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "shared/ui/footer";



const App: React.FC = () => {
    return (
        <div className={s.content}>
            {/*<Header/>*/}
            <div className={s.main__container}>
                <Navbar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
