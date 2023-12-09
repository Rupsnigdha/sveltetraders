import { PUBLIC_URL } from '$env/static/public';
import { fetchRequest } from '../../fetchRequest';

export const GET = async ({ request }) => {
	const contractId = request.headers.get('contractId');
	let url = `${PUBLIC_URL}/my/contracts/${contractId}`;
	const data = await fetchRequest(url, 'GET');
	return new Response(JSON.stringify(data), { status: 200 });
};
