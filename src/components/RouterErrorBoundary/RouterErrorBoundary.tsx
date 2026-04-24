import { Box, Typography, Button } from '@mui/material';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

const RouterErrorBoundary = () => {
  const error = useRouteError();

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" color="primary">
        {isRouteErrorResponse(error) ? error.status : 'Упс!'}
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
        Что-то пошло не так
      </Typography>
      <Button variant="contained" onClick={() => navigate('/home', { replace: true })}>
        Вернуться на главную
      </Button>
    </Box>
  );
};

export default RouterErrorBoundary;
