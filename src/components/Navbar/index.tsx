import {
  AppBar,
  Avatar,
  Button,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as LinkRoute, useNavigate } from 'react-router-dom';

import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    dispatch && dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <>
      <AppBar sx={{ background: '#ffff' }} position="static">
        <Toolbar>
          <LinkRoute to={'/'}>
            <Avatar
              alt="Cafe Shop"
              src="./assets/images/logo.png"
              sx={{ width: 50, height: 50, marginLeft: '50px' }}
            />
          </LinkRoute>
          <LinkRoute to={'/'}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: 'orange',
                marginLeft: '20px',
                fontWeight: 700,
                fontSize: '25px',
              }}
            >
              SCAPHE
            </Typography>
          </LinkRoute>
          {user ? (
            <>
              <Avatar
                alt="Cafe Shop"
                src={user.avatar}
                sx={{ width: 50, height: 50, marginLeft: 'auto' }}
              />
              <Button
                href="/profile"
                sx={{
                  marginLeft: '8px',
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                プロフィール
              </Button>
              <Button
                sx={{
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
                onClick={handleLogout}
              >
                ログアウト
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                sx={{ marginLeft: 'auto', fontWeight: 700, cursor: 'pointer' }}
              >
                ログイン
              </Link>
              <Link
                href="/register"
                sx={{ marginLeft: '10px', fontWeight: 700, cursor: 'pointer' }}
              >
                レジスター
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
