import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {ApplicationPage} from "pages/applicationsPage";
import {EditPage} from "pages/editPage";
import {MapPage} from "pages/mapPage";
import {AddPage} from "pages/addPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <ApplicationPage />,
            },
            {
                path: "/statement",
                element: <ApplicationPage />,
                children: [
                    {
                        path: "/statement/:id",
                        element: <EditPage/>,
                    },
                    {
                        path: "/statement/add",
                        element: <AddPage/>,
                    }
                ]
            },
            {
                path: "/map/:x/:y/:zoom",
                element: <MapPage/>,
            }
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
