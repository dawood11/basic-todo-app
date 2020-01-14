import { APP_ROUTES } from './RouteConstants';
import Todos from '../../Component/Todo/Todos/Todos';
import UserProfile from '../../Component/UserProfile/UserProfile';

export const appRoutes = [
	{
		path: APP_ROUTES.root,
		component: Todos,
		exact: true,
	},
	{
		path: APP_ROUTES.userProfileQuery,
		component: UserProfile,
	},
];
