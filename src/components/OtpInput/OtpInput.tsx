import { useIMask } from 'react-imask';

import AppInput from '@/components/AppInput';

type OtpInputProps = {
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: boolean;
  helperText?: string;
};

const OtpInput = ({ onChange, onBlur, error, helperText }: OtpInputProps) => {
  const { ref } = useIMask<HTMLInputElement>(
    { mask: '000000' },
    { onAccept: (_, mask) => onChange(mask.unmaskedValue) }
  );

  return (
    <AppInput
      inputRef={ref}
      onBlur={onBlur}
      placeholder="Проверочный код"
      inputMode="numeric"
      autoComplete="one-time-code"
      error={error}
      helperText={helperText}
    />
  );
};

export default OtpInput;
