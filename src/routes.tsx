
import React from "react";
import { DemoContainer } from './demo/DemoContainer';

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <DemoContainer /> },
    {
        path: "/frontend",
        key: "FRONTEND",
        component: () => <h1>Frontend</h1>,
    },
];

export default ROUTES;