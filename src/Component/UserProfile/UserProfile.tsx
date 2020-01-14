import './UserProfile.css';

import React, { useEffect, useState } from 'react';

import { User } from '../../Redux/User/User.types';
import { getUser } from '../../Redux/User/User.actions';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';

const UserProfile: React.FC = () => {
	const [user, setUser] = useState<User | null>();
	const { userIdParam } = useParams();
	const [userLabel, setUserLabel] = useState<string>('User not found...');
	const history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			let userOfTodo = null;

			if (userIdParam) {
				await setUserLabel('Loading...');
				userOfTodo = await getUser(userIdParam);
			}
			if (userOfTodo) {
				setUser(userOfTodo);
			} else {
				await setUserLabel('User not found...');
			}
		};

		fetchData();
	}, [userIdParam]);

	const handleGoBackBtn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		history.goBack();
	};

	return (
		<div>
			{user
				? <div className={'User'}>
					<h4>{user.name} ({user.id})</h4>
					<span>
						<a href={'mailto:' + user.email}>{user.email}</a>
					</span>
				</div>
				: <p>{userLabel}</p>
			}
			<hr />
			<button onClick={(event) => handleGoBackBtn(event)}>Go back</button>
		</div>
	);
};

export default UserProfile;
