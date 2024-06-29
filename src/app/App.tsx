import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../shared/ui/Navbar/Navbar";

import s from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



const App: React.FC = () => {
    return (
        <div className={s.content}>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default App;
