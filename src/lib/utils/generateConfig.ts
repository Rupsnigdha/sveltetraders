import { Configuration } from '$lib/api';

export const generateConfig = (token?: string): Configuration => {
	return new Configuration({
		accessToken: token
	});
};
