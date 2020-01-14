import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { appRoutes } from './RouteTypes';

const Router: React.FC = () => {
	return (
		<Switch>
			{
				appRoutes.map(route => <Route
					key={route.path}
					exact
					path={route.path}
					component={route.component}
				/>)
			}
		</Switch>
	);
};

export default Router;
