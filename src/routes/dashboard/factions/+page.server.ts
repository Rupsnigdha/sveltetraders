import type { PageServerLoad } from './$types';
import { FactionsApi, Configuration } from '$lib/api';

export const load: PageServerLoad = async ({ locals }) => {
	const config = new Configuration({ accessToken: locals.accessToken });
	const factionsApi = new FactionsApi(config);
    const factions = await factionsApi.getFactions();
	return {
        factions: await factions.data,
	};
};