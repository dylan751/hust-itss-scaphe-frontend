import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface Props {
  children: React.ReactNode;
}
const HomepageLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default HomepageLayout;
