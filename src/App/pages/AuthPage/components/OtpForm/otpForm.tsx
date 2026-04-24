import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';

import AppInput from '@/components/AppInput';
import OtpInput from '@/components/OtpInput';
import { useOtpMutation } from '@/hooks/mutations/useOtpMutation';
import { useSignInMutation } from '@/hooks/mutations/useSignInMutation';
import { formOtpSchema, type FormOtpData } from '@/types/formAuthType';
type OtpFormProps = {
  phone: string;
  phoneDisplay: string;
  retryDelay: number;
  onSuccess: () => void;
  onRetry: (retryDelay: number) => void;
  onBack: () => void;
};

const OtpForm = ({ phone, phoneDisplay, retryDelay, onSuccess, onRetry, onBack }: OtpFormProps) => {
  const signInMutation = useSignInMutation();
  const otpMutation = useOtpMutation();
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(retryDelay / 1000));

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof formOtpSchema>, unknown, FormOtpData>({
    resolver: zodResolver(formOtpSchema),
    defaultValues: { code: '' },
  });

  const onSubmit = (data: FormOtpData) => {
    signInMutation.mutate({ phone, code: data.code }, { onSuccess });
  };

  const handleRetry = () => {
    otpMutation.mutate({ phone }, { onSuccess: (res) => onRetry(res.retryDelay) });
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      <AppInput value={phoneDisplay} disabled inputMode="tel" />

      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <OtpInput
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={!!errors.code || signInMutation.isError}
            helperText={errors.code?.message || signInMutation.error?.message}
          />
        )}
      />

      <Stack spacing={3} sx={{ maxWidth: 328, py: 2 }}>
        <Button type="submit" variant="contained" fullWidth loading={signInMutation.isPending}>
          Войти
        </Button>

        {secondsLeft > 0 ? (
          <Typography variant="subtitle1" color="textDisabled" sx={{ whiteSpace: 'nowrap' }}>
            Запросить код повторно можно через {secondsLeft} секунд
          </Typography>
        ) : (
          <Button variant="text" onClick={handleRetry} loading={otpMutation.isPending}>
            Запросить код ещё раз
          </Button>
        )}

        <Button variant="text" fullWidth onClick={onBack}>
          Изменить номер телефона
        </Button>
      </Stack>
    </Stack>
  );
};

export default OtpForm;
