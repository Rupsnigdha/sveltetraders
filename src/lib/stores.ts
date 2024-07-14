import { writable } from 'svelte/store';
import { Configuration } from './api';

// export const configStore = () => {
//     const config = writable<Configuration>()
//     function setUserToken(token: string) {
//         const config = writable<Configuration>({})
//     }
//     return {...config}
// }

export const config = new Configuration();
