import { Configuration } from './api';
import { token } from './config';

// export const configStore = () => {
//     const config = writable<Configuration>()
//     function setUserToken(token: string) {
//         const config = writable<Configuration>({})
//     }
//     return {...config}
// }

export const config = new Configuration();
export const configWithToken = new Configuration({ accessToken: token });
