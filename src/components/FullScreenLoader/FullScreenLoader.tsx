import { Box, CircularProgress } from '@mui/material';

const FullScreenLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
      }}
    >
      <CircularProgress size={40} />
    </Box>
  );
};

export default FullScreenLoader;
