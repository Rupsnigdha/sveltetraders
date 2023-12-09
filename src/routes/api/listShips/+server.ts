import { PUBLIC_URL } from '$env/static/public';
import { fetchRequest } from '../fetchRequest';

export const GET = async ({ request }) => {
	const agentEntries = request.headers.get('agentEntries');
	let url = `${PUBLIC_URL}/my/ships`;
	const data = await fetchRequest(url, 'GET');
	if (agentEntries != null) {
		url = `${url}?limit=${agentEntries}`;
	}
	return new Response(JSON.stringify(data), { status: 200 });
};
