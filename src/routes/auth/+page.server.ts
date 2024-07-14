import type { PageServerLoad } from './$types';
import { FactionsApi } from '$lib/api';
import { config } from '$lib/stores';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { signUpFormSchema } from './schema';
import type { Actions } from '@sveltejs/kit';
import { fail } from 'sveltekit-superforms';

export const load: PageServerLoad = async () => {
	const factionsApi = new FactionsApi(config);
	const res = await factionsApi.getFactions();
	const factions = await res.data;

	return {
		factions: factions,
		signUpForm: await superValidate(zod(signUpFormSchema))
	};
};

export const actions : Actions = {
    register: async() => {
		const signUpForm = await superValidate(zod(signUpFormSchema));
		if(!signUpForm.valid) {
			return fail(400, {signUpForm})
		}
		return {signUpForm}
    },
	login: async() => {

	}
}