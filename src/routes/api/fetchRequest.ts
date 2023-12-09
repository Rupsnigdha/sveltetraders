import { SECRET_TOKEN } from '$env/static/private';

export const fetchRequest = async (path: string, method: string) => {
	let data;
	const options = {
		method: method,
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${SECRET_TOKEN}`
		}
	};
	try {
		const res = await fetch(path, options);
		return await res.json();
	} catch (err) {
		console.error(err);
	}
};
