export const getRequest = (url: string) => {
	const options = {
		method: 'GET',
		headers: {
			'Content-type': 'application/json;'
		}
	};

	return fetch(url, options)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Error fetching data...');
			}
		})
		.then((responseData: any) => {
			return responseData;
		})
		.catch(err => {
			console.error(err);
		});
};

export const deleteRequest = (url: string) => {
	const options = {
		method: 'DELETE',
	};

	return fetch(url, options)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Error fetching data...');
			}
		})
		.then((responseData: any) => {
			return responseData;
		})
		.catch(err => {
			console.error(err);
		});
};
