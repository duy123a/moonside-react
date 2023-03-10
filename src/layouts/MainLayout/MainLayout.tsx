import imageUrl from '@/assets/dashboard.webp';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, BoxProps, styled } from '@mui/material';
import * as React from 'react';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const BackgroundContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));

function MainLayout({ children }: MainLayoutProps) {
  return (
    <BackgroundContainer sx={{ display: 'flex', flexFlow: 'column', height: '100vh' }}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </BackgroundContainer>
  );
}

export default MainLayout;
