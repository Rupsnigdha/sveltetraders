import { PUBLIC_URL } from '$env/static/public';
import { fetchRequest } from '../../fetchRequest';

export const GET = async ({ request }) => {
	const factionName = request.headers.get('factionName');
	let url = `${PUBLIC_URL}/factions/${factionName}`;
	const data = await fetchRequest(url, 'GET');
	return new Response(JSON.stringify(data), { status: 200 });
};
