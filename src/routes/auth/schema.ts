import { z } from 'zod';
import { FactionSymbol } from '$lib/api';

export const signUpFormSchema = z.object({
	symbol: z.string().min(3).max(14),
	faction: z.nativeEnum(FactionSymbol)
});

export type SignUpFormSchema = typeof signUpFormSchema;
