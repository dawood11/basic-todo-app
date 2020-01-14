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

	const handleDeleteBtnClick = async (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, todo: Todo) => {
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
					<div key={todo.id}>
						<div className={'Todo-task'}>
							<div className={'deleteBtn'}>
								<span className={'deleteIcon'} onClick={(event) => handleDeleteBtnClick(event, todo)}>
									x
								</span>
							</div>
							<div onClick={(event) => handleTodoTaskClick(event, todo)}>
								<h4>{todo.title}</h4>
								<p>{todo.body}</p>
								<br />
								<span className={'Author'}>By: userId {todo.userId}</span>
							</div>
						</div>
						<hr />
					</div>
				)
			}
		</div>
	);
};

export default TodoList;
