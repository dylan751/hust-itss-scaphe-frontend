import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Container, Grid } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <Grid
        sx={{
          color: 'black',
          fontWeight: 800,
          fontSize: '25px',
        }}
      >
        <Container sx={{ maxWidth: '70%' }}>
          <Grid
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {props.children}
          </Grid>
        </Container>
      </Grid>

      <Footer />
    </>
  );
};

export default Layout;
