import { PUBLIC_URL } from '$env/static/public';
import { fetchRequest } from '../../fetchRequest';

export const GET = async ({ request }) => {
	const agentSymbol = request.headers.get('agentSymbol');
	let url = `${PUBLIC_URL}/agents/${agentSymbol}`;
	const data = await fetchRequest(url, 'GET');
	return new Response(JSON.stringify(data), { status: 200 });
};
