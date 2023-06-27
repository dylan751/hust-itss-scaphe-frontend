import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { LoginInterface } from '../../models/user';
import userApi from '../../services/userApi';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    dispatch && dispatch({ type: 'LOGIN_START' });

    const data = new FormData(event.currentTarget);

    const email = data.get('email') as string;
    const password = data.get('password') as string;

    const loginData: LoginInterface = { email, password };

    try {
      const res = await userApi.login(loginData);

      dispatch &&
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.data.user });
      navigate('/');
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch &&
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: error.response.data.message,
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          SCaPhe
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メール"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="私を思い出してください"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                パスワードを忘れた
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                サインアップ
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
