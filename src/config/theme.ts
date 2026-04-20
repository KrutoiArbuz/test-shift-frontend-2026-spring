import { createTheme, responsiveFontSizes } from '@mui/material';

export const colors = {
  primary: '#1975FF',
  primaryDark: '#0052CC',
  primaryLight: '#4C94FF',
  primaryExtraLight: '#CCE0FF',

  bgPrimary: '#FFFFFF',
  bgSecondary: '#F3F5F6',
  bgTertiary: '#F9FAFB',

  error: '#F64C4C',

  borderExtraLight: '#E3E5E5',
  borderLight: '#CED2DA',
  borderMedium: '#97A1AF',

  textPrimary: '#141C24',
  textInvert: '#FFFFFF',
  textSecondary: '#344051',
  textTertiary: '#637083',
  textQuaternary: '#97A1AF',
  textError: '#F64C4C',

  indicatorWhite: '#FFFFFF',
  indicatorLight: '#CED2DA',
  indicatorMedium: '#97A1AF',
  indicatorNormal: '#141C24',
  indicatorError: '#F64C4C',
};

const baseTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: colors.textInvert,
    },
    error: {
      main: colors.error,
    },

    background: {
      default: colors.bgPrimary,
      paper: colors.bgTertiary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textTertiary,
    },
  },

  shape: { borderRadius: 8 },

  typography: {
    fontFamily: '"Inter","Roboto", "Helvetica", "Arial", sans-serif',

    h5: { fontSize: 24, fontWeight: 700, lineHeight: 1.33 },
    body1: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: 14, fontWeight: 600, lineHeight: 1.4 },
    subtitle1: { fontSize: 14, fontWeight: 400, lineHeight: 1.4 },
    button: { fontSize: 16, fontWeight: 600, lineHeight: 1.5 },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
          paddingInline: 32,
          paddingBlock: 16,
          textTransform: 'none',
        },
        contained: {
          color: colors.textInvert,
          '&.Mui-disabled': {
            backgroundColor: colors.primaryExtraLight,
            color: colors.textInvert,
          },
          '&.MuiButton-loading': { backgroundColor: colors.primaryExtraLight },
          '&.Mui-focusVisible': { boxShadow: `0 0 0 2px ${colors.primaryExtraLight}` },
          '&:hover': { backgroundColor: colors.primaryDark },
        },
        text: {
          color: colors.textPrimary,
          backgroundColor: 'transparent',
          '&.Mui-disabled': { color: colors.textQuaternary },
          '&:hover': { backgroundColor: colors.bgTertiary },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.4,
          transform: 'none',
          color: colors.textPrimary,
          '&.Mui-focused': {
            color: colors.textPrimary,
          },
          '&.Mui-error': {
            color: colors.textPrimary,
          },
          '&.Mui-disabled': {
            color: colors.textPrimary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: colors.bgPrimary,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.5,
          '& input::placeholder, & textarea::placeholder': {
            color: colors.textTertiary,
            opacity: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.borderLight,
          },
          '&.Mui-disabled': {
            backgroundColor: colors.bgSecondary,
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.borderLight,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primaryLight,
            borderWidth: 2,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.error,
            borderWidth: 2,
          },
          '&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline':
            {
              borderColor: colors.borderMedium,
            },
        },
        input: {
          padding: '12px 12px',
          color: colors.textPrimary,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.4,
          color: colors.textTertiary,
          '&.Mui-error': {
            color: colors.error,
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
