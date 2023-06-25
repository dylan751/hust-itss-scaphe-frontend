import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material';
import { Link as LinkRoute } from 'react-router-dom';

import React from 'react';

const Navbar = () => {
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
