import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: '#ffff' }} position="static">
        <Toolbar>
          <Avatar
            alt="Cafe Shop"
            src="./assets/images/logo.png"
            sx={{ width: 50, height: 50, marginLeft: '50px' }}
          />
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
          <Link sx={{ marginLeft: 'auto', fontWeight: 700, cursor: 'pointer' }}>
            ログイン
          </Link>
          <Link sx={{ marginLeft: '10px', fontWeight: 700, cursor: 'pointer' }}>
            レジスター
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
