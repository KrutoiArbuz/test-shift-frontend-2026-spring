import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import { useSessionQuery } from '@/hooks/queries/useSessionQuery';
import { useAuthStore } from '@/store/useAuthStore';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    useAuthStore.getState().logout();
    navigate('/auth', { replace: true });
  };

  const { data: user } = useSessionQuery();

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
      <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
        Привет пользователь {user?._id}!
      </Typography>

      <Button variant="contained" onClick={handleLogout}>
        Выйти из аккаунта
      </Button>
    </Box>
  );
};

export default HomePage;
