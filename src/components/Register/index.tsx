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
import userApi from '../../services/userApi';
import { CreateOrUpdateUserRequestInterface } from '../../models/user';
import { toast } from 'react-toastify';

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirm-password') as string;
    const avatar = 'https://picsum.photos/200/200'; // TODO: Add choose avatar function

    if (!name || !email || !password || !confirmPassword || !country) {
      toast.error('全部のデータを入力してください！');
      return;
    }

    if (confirmPassword !== password) {
      toast.error('パスワードの確認は間違います！');
      return;
    }

    const registerData: CreateOrUpdateUserRequestInterface = {
      name,
      email,
      password,
      country,
      avatar,
    };

    try {
      await userApi.createUser(registerData);
      toast.success('レジスターできました');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
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
