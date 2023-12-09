import { PUBLIC_URL } from '$env/static/public';
import { fetchRequest } from '../../fetchRequest';

export const GET = async () => {
	let url = `${PUBLIC_URL}/factions?limit=20`;
	const data = await fetchRequest(url, 'GET');
	return new Response(JSON.stringify(data), { status: 200 });
};
