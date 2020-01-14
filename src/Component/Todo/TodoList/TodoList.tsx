import './TodoList.css';

import React, { useEffect, useState } from 'react';

import { APP_ROUTES } from '../../../Services/Router/RouteConstants';
import { Todo } from '../../../Redux/Todo/Todo.types';
import { deleteTodo } from '../../../Redux/Todo/Todo.actions';
import { useHistory } from 'react-router-dom';

interface IProps {
	todosProp: Todo[];
}

const TodoList: React.FC<IProps> = (props: IProps) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const history = useHistory();

	useEffect(() => {
		setTodos(props.todosProp);
	}, [props.todosProp]);

	const handleDeleteBtnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, todo: Todo) => {
		event.preventDefault();
		const filteredList = await deleteTodo(todo.id);

		await setTodos(filteredList);
	};

	const handleTodoTaskClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, todo: Todo) => {
		event.preventDefault();
		history.push(APP_ROUTES.userProfile + todo.userId);
	};

	return (
		<div>
			{
				todos.map((todo: Todo) =>
					<div key={todo.id} className={'Todo-task'}>
						<div onClick={(event) => handleTodoTaskClick(event, todo)}>
							<h4>{todo.title}</h4>
							<p>{todo.body}</p>
							<br />
						</div>
						<span>By: userId {todo.userId}</span>
						<button className={'deleteBtn'} onClick={(event) => handleDeleteBtnClick(event, todo)}>
							Delete
						</button>
						<hr />
					</div>
				)
			}
		</div>
	);
};

export default TodoList;
