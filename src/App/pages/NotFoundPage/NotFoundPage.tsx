import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
  const navigate = useNavigate();
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
      <Typography variant="h2" color="primary">
        404
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
        Страница не найдена
      </Typography>

      <Button variant="contained" onClick={() => navigate('/home', { replace: true })}>
        Вернуться на главную
      </Button>
    </Box>
  );
};

export default NotFoundPage;
