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
import {EditModal} from "features/editModal";
import {MapPage} from "pages/mapPage";
import {AddModal} from "features/addModal";

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
                        element: <EditModal/>,
                    },
                    {
                        path: "/statement/add",
                        element: <AddModal/>,
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
