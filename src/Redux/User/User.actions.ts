import { User } from './User.types';
import { getRequest } from '../../Services/Requests';

export const getUser = async (userIdParam: string) => {
	const url = `https://jsonplaceholder.typicode.com/users/${userIdParam}`;

	const user: User = await getRequest(url);

	return user;
};
