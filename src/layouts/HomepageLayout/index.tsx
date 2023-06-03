import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Grid } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
const HomepageLayout = (props: Props) => {
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

export default HomepageLayout;
