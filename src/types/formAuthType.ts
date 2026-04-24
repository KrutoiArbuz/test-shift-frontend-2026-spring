import { z } from 'zod';

export const formPhoneSchema = z.object({
  phone: z
    .string()
    .min(1, 'Поле является обязательным')
    .length(11, 'Поле должно содержать 11 цифр')
    .regex(/^\d+$/, 'Поле должно содержать 11 цифр'),
});

export const formOtpSchema = z.object({
  code: z
    .string()
    .min(1, 'Код должен содержать 6 цифр')
    .length(6, 'Код должен содержать 6 цифр')
    .regex(/^\d+$/, 'Код должен содержать 6 цифр')
    .transform(Number),
});

export type FormPhoneData = z.infer<typeof formPhoneSchema>;
export type FormOtpData = z.infer<typeof formOtpSchema>;
