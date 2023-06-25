import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirm-password'),
      country,
    });

    navigate('/login');
  };

  const [country, setCountry] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
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
          登録
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="ユーザー名"
            name="name"
            autoFocus
          />
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="パスワードの確認"
            type="password"
            id="confirm-password"
          />
          <FormControl sx={{ marginTop: '20px', width: '150px' }}>
            <InputLabel id="label-select-coutry">カントリー</InputLabel>
            <Select
              labelId="select-country"
              id="select-country"
              value={country}
              label="country"
              onChange={handleChange}
            >
              <MenuItem value="ベトナム">ベトナム</MenuItem>
              <MenuItem value="日本">日本</MenuItem>
              <MenuItem value="英語">英語</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登録
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {'アカウントをすでにお持ちですか? ログイン'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
