import type { PageServerLoad } from './$types';
import { AgentsApi, Configuration, ContractsApi, FleetApi } from '$lib/api';

export const load: PageServerLoad = async ({ locals }) => {
	const config = new Configuration({ accessToken: locals.accessToken });
	const agentsApi = new AgentsApi(config);
	const contractsApi = new ContractsApi(config);
	const fleetApi = new FleetApi(config);
	const user = await agentsApi.getMyAgent();
	const contracts = await contractsApi.getContracts();
	const ships = await fleetApi.getMyShips();
	return {
		user: await user.data,
		contracts: await contracts.data,
		ships: await ships.data
	};
};