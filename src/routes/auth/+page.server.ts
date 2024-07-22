import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { generateConfig } from '$lib/utils/generateConfig';
import { DefaultApi, FactionsApi } from '$lib/api';
import { superValidate, fail, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema, signUpFormSchema } from './schema';

export const load: PageServerLoad = async () => {
	const config = generateConfig();
	const factionsApi = new FactionsApi(config);
	const res = await factionsApi.getFactions();
	let factions = await res.data;
	factions = factions
		.filter((faction) => faction.isRecruiting)
		.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
	return {
		factions: factions,
		signUpForm: await superValidate(zod(signUpFormSchema)),
		loginForm: await superValidate(zod(loginFormSchema))
	};
};

export const actions: Actions = {
	register: async ({ cookies, request }) => {
		const signUpForm = await superValidate(request, zod(signUpFormSchema));
		if (!signUpForm.valid) {
			return fail(400, { signUpForm });
		}
		const config = generateConfig();
		const defaultApi = new DefaultApi(config);
		const res = await defaultApi.register({
			registerRequest: { faction: signUpForm.data.faction, symbol: signUpForm.data.symbol }
		});
		const accessToken = await res.data.token;
		cookies.set('accessToken', accessToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: 60 * 60 * 24 * 7
		});
		return message(signUpForm, { accessToken });
	},
	login: async ({ cookies, request }) => {
		const loginForm = await superValidate(request, zod(loginFormSchema));
		if (!loginForm.valid) {
			return fail(400, { loginForm });
		}
		const accessToken = loginForm.data.token;
		cookies.set('accessToken', accessToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: 60 * 60 * 24 * 7
		});
		return message(loginForm, { accessToken: accessToken });
	}
};
