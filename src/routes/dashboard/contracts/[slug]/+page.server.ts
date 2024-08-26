import type { PageServerLoad } from './$types';
import { Configuration, ContractsApi } from '$lib/api';

export const load: PageServerLoad = async ({ locals, params }) => {
	const config = new Configuration({ accessToken: locals.accessToken });
	const contractsApi = new ContractsApi(config);
	const contract = await contractsApi.getContract({contractId: params.slug});
	return {
		contract: await contract.data,
	};
};	