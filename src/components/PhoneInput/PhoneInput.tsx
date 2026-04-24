import { useIMask } from 'react-imask';

import AppInput from '@/components/AppInput';

type PhoneInputProps = {
  onChange: (value: string) => void;
  onDisplayChange?: (value: string) => void;
  onBlur: () => void;
  error?: boolean;
  helperText?: string;
};

const PhoneInput = ({ onChange, onDisplayChange, onBlur, error, helperText }: PhoneInputProps) => {
  const { ref } = useIMask<HTMLInputElement>(
    { mask: '+{7} 000 000 00 00' },
    {
      onAccept: (value, mask) => {
        onChange(mask.unmaskedValue);
        onDisplayChange?.(value);
      },
    }
  );

  return (
    <AppInput
      inputRef={ref}
      onBlur={onBlur}
      placeholder="Телефон"
      inputMode="tel"
      error={error}
      helperText={helperText}
    />
  );
};

export default PhoneInput;
