import imageUrl from '@/assets/dashboard.png';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Box from '@mui/material/Box/Box';
import makeStyles from '@mui/styles/makeStyles';
import * as React from 'react';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    '&&': {
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  },
}));

function MainLayout({ children }: MainLayoutProps) {
  const classes = useStyles();
  return (
    <Box minHeight="100vh" className={classes.paperContainer}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Box>
  );
}

export default React.memo(MainLayout);
