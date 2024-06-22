import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogPage from "./pages/LogPage/LogPage";
import MapPage from "./pages/MapPage/MapPage";

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LogPage/>}/>
                    <Route path='/statement' element={<LogPage/>}/>
                    <Route path='/map/<x>/<y>/<zoom>' element={<MapPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
