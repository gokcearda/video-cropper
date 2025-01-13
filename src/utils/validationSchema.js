// src/utils/validationSchema.js
import { z } from 'zod';

export const metadataSchema = z.object({
    name: z.string().min(1, 'İsim boş olamaz'),
    description: z.string().optional(),
});