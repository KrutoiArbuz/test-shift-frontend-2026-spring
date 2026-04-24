import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import OtpForm from './components/OtpForm';
import PhoneForm from './components/PhoneForm';

type AuthStep = 'phone' | 'otp';

const AuthPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<AuthStep>('phone');
  const [phone, setPhone] = useState('');
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [retryDelay, setRetryDelay] = useState(0);
  const [otpKey, setOtpKey] = useState(0);

  const handlePhoneSuccess = (submittedPhone: string, display: string, delay: number) => {
    setPhone(submittedPhone);
    setPhoneDisplay(display);
    setRetryDelay(delay);
    setStep('otp');
  };

  const handleOtpSuccess = () => {
    navigate('/home', { replace: true });
  };

  const handleRetry = (delay: number) => {
    setRetryDelay(delay);
    setOtpKey((k) => k + 1);
  };

  const handleBack = () => {
    setStep('phone');
  };

  return (
    <Stack spacing={3} sx={{ flex: 1 }}>
      <Typography variant="h5">Вход</Typography>
      <Typography sx={{ maxWidth: 296 }} variant="body1" color="text.secondary">
        {step === 'phone'
          ? 'Введите номер телефона для входа в личный кабинет'
          : 'Введите проверочный код для входа в личный кабинет'}
      </Typography>

      <Box sx={{ maxWidth: 464 }}>
        {step === 'phone' ? (
          <PhoneForm onSuccess={handlePhoneSuccess} />
        ) : (
          <OtpForm
            key={otpKey}
            phone={phone}
            phoneDisplay={phoneDisplay}
            retryDelay={retryDelay}
            onSuccess={handleOtpSuccess}
            onRetry={handleRetry}
            onBack={handleBack}
          />
        )}
      </Box>
    </Stack>
  );
};

export default AuthPage;
