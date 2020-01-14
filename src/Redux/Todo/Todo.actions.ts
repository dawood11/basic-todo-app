import { deleteRequest, getRequest } from '../../Services/Requests';

import { Todo } from './Todo.types';

export const getTodos = async () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';

	const todoListData: Todo[] = await getRequest(url);

	localStorage.setItem('todos', JSON.stringify(todoListData));

	return todoListData;
};

export const deleteTodo = async (id: number) => {
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

	try {
		await deleteRequest(url);
	} catch (error) {
		console.log(error);
	}

	const tmpTodoList = localStorage.getItem('todos');

	let sessionStorageTodoList: Todo[] = [];

	if (tmpTodoList) {
		sessionStorageTodoList = JSON.parse(tmpTodoList);
	}
	const filteredList = sessionStorageTodoList.filter((sessionStorageTodo: Todo) => sessionStorageTodo.id !== id);

	localStorage.setItem('todos', JSON.stringify(filteredList));

	return filteredList;
};
