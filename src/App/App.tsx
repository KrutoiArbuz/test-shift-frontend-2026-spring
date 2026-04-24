import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useRevalidator } from 'react-router';

import { setRevalidator } from '@/config/revalidator';

function App() {
  const revalidator = useRevalidator();

  useEffect(() => {
    setRevalidator({ revalidate: revalidator.revalidate });
    return () => setRevalidator(null);
  }, [revalidator.revalidate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 2, py: 12 }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
