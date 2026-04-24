import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import PhoneInput from '@/components/PhoneInput';
import { useOtpMutation } from '@/hooks/mutations/useOtpMutation';
import { formPhoneSchema, type FormPhoneData } from '@/types/formAuthType';

type PhoneFormProps = {
  onSuccess: (phone: string, phoneDisplay: string, retryDelay: number) => void;
};

const PhoneForm = ({ onSuccess }: PhoneFormProps) => {
  const otpMutation = useOtpMutation();
  const [phoneDisplay, setPhoneDisplay] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPhoneData>({
    resolver: zodResolver(formPhoneSchema),
    defaultValues: { phone: '' },
  });

  const onSubmit = (data: FormPhoneData) => {
    otpMutation.mutate(
      { phone: data.phone },
      { onSuccess: (res) => onSuccess(data.phone, phoneDisplay, res.retryDelay) }
    );
  };

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <PhoneInput
            onChange={field.onChange}
            onDisplayChange={(value) => setPhoneDisplay(value)}
            onBlur={field.onBlur}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
      />

      {otpMutation.isError && (
        <Typography variant="subtitle1" color="error">
          {otpMutation.error.message}
        </Typography>
      )}

      <Box sx={{ maxWidth: 328, py: 2 }}>
        <Button type="submit" variant="contained" fullWidth loading={otpMutation.isPending}>
          Продолжить
        </Button>
      </Box>
    </Stack>
  );
};

export default PhoneForm;
