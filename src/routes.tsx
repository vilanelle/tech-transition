import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DemoContainer } from './demo/DemoContainer';
import { Frontend } from './frontend/Frontend';

const routes = [
  { path: '/', key: 'RenderRoutes', exact: true, component: () => <DemoContainer /> },
  {
    path: '/frontend',
    key: 'FRONTEND',
    component: () => <Frontend />,
  },
];

export default routes;

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export const RenderRoutes: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route: any) => <RouteWithSubRoutes key={route.key} {...route} />)}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  </BrowserRouter>

);
