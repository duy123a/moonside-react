import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <Paper component="header" square variant="outlined">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              component={Link}
              to="/cc"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
            <Button color="inherit" sx={{ marginLeft: 'auto' }}>
              Add new post
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
}

export default memo(Header);
