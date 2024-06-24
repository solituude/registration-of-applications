import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ApplicationPage from "../pages/ApplicationsPage";
import MapPage from "../pages/MapPage";
import Navbar from "../widgets/Navbar";

import s from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
    return (
        <div className={s.content}>

            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ApplicationPage/>}/>
                    <Route path='/statement' element={<ApplicationPage/>}/>
                    <Route path='/map/<x>/<y>/<zoom>' element={<MapPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
