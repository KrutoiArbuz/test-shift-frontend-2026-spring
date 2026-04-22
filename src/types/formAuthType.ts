import { z } from 'zod';

export const formPhoneSchema = z.object({
  phone: z
    .string()
    .min(1, 'Поле является обязательным')
    .length(11, 'Поле является обязательным')
    .regex(/^\d+$/, 'Поле является обязательным'),
});

export const formOtpSchema = z.object({
  code: z.coerce
    .number()
    .int()
    .min(100000, 'Код должен содержать 6 цифр')
    .max(999999, 'Код должен содержать 6 цифр'),
});

export type FormPhoneData = z.infer<typeof formPhoneSchema>;
export type FormOtpData = z.infer<typeof formOtpSchema>;
