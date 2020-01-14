import React, { useEffect, useState } from 'react';

import { Todo } from '../../../Redux/Todo/Todo.types';
import TodoList from '../TodoList/TodoList';
import { getTodos } from '../../../Redux/Todo/Todo.actions';

const Todos: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [todosLabel, setTodosLabel] = useState<string>('You don\'t have any tasks.');

	useEffect(() => {
		const fetchData = async () => {
			await setTodosLabel('Loading...');
			const newTodos = await getTodos();

			if (newTodos.length === 0) {
				await setTodosLabel('You don\'t have any tasks.');
			}
			await setTodos(newTodos);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h4>Todo tasks ({todos.length})</h4>

			{
				todos && todos.length === 0
					? <p>{todosLabel}</p>
					: <TodoList todosProp={todos} />

			}
		</div>
	);
};

export default Todos;
