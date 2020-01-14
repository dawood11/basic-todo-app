import './App.css';

import React from 'react';
import Router from './Services/Router/Router';

const App: React.FC = () => {
	return (
		<div className={'App'}>
			<h1>Basic Todo App</h1>
			<Router />
		</div>
	);
};

export default App;
