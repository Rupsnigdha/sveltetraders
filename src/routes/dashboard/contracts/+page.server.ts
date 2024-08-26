import type { PageServerLoad } from './$types';
import { Configuration, ContractsApi } from '$lib/api';

export const load: PageServerLoad = async ({ locals }) => {
	const config = new Configuration({ accessToken: locals.accessToken });
	const contractsApi = new ContractsApi(config);
	const contracts = await contractsApi.getContracts();
	return {
		contracts: await contracts.data,
	};
};	