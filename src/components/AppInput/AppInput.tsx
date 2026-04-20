import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  type OutlinedInputProps,
} from '@mui/material';
import { forwardRef, useId } from 'react';

type AppInputProps = Omit<OutlinedInputProps, 'label'> & { label?: string; helperText?: string };

const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  ({ label, helperText, error, id, ...props }, ref) => {
    const generatedId = useId();
    const resolvedId = id ?? generatedId;

    return (
      <FormControl fullWidth error={error} variant="outlined">
        {label && (
          <InputLabel shrink htmlFor={resolvedId} sx={{ position: 'relative', mb: 0.75 }}>
            {label}
          </InputLabel>
        )}
        <OutlinedInput id={resolvedId} notched={false} inputRef={ref} {...props} />
        {helperText && <FormHelperText sx={{ mt: 0.5, mx: 0 }}>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

AppInput.displayName = 'AppInput';

export default AppInput;
