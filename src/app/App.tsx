import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../shared/ui/Navbar/Navbar";

import s from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "../shared/ui/Header/Header";
import Footer from "../shared/ui/Footer/Footer";



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
