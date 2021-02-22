import React, { FunctionComponent, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

// Styles First!
import 'ASSETS/styles/app.css';

import { pageLoad } from 'API/data/navigation/actions';
import { getRouteFromUrl, parseQueryParams } from 'API/data/navigation/helpers';
import { store } from 'API/data/store';
import { NOT_FOUND } from 'CONSTANTS/routes';

import { SiteFooter, SiteHeader } from 'Components';

import routeConfig from './route-config';

export const App: FunctionComponent<DivType> = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = parseQueryParams(location.search);
    const route = getRouteFromUrl(location.pathname);

    // Every time the path is updated, the "SET_ROUTE" action is called
    store.dispatch(
      pageLoad({
        hash: location.hash,
        queryParams: queryParams,
        path: location.pathname,
        route: route,
      })
    );
  }, [location]);

  return (
    <>
      <SiteHeader className="z-1" />
      <Switch>
        {routeConfig.map((route, index) => {
          const Component = route.component;
          const path = route.path;

          return (
            <Route
              key={index}
              path={path}
              exact={true}
              render={(props) => (
                <Component
                  className="relative z-1"
                  pageName={route.pageName}
                  {...props}
                />
              )}
            />
          );
        })}
        <Redirect to={NOT_FOUND} />
      </Switch>
      <SiteFooter className="z-1" />
    </>
  );
};

export default App;
