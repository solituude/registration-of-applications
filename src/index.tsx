import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ApplicationPage from "./pages/ApplicationsPage/ApplicationPage";
import EditModal from "./pages/ApplicationsPage/ui/EditModal/EditModal";
import MapPage from "./pages/MapPage/MapPage";
import AddModal from "./pages/ApplicationsPage/ui/AddModal/AddModal";

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
