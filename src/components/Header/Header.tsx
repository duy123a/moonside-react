import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

export interface HeaderProps {}

const pages = ['Posts', '404'];

function Header(props: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();

  return (
    <Box component="header">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="homeButton"
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
              component={Link}
              to="/"
            >
              <HomeIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MuiLink
                    key={page}
                    sx={{ textDecoration: 'none', color: 'text.primary' }}
                    component={NavLink}
                    to={`/${page.toLowerCase()}`}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </MuiLink>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MuiLink
                  key={page}
                  sx={{ textDecoration: 'none', color: 'text.primary' }}
                  component={NavLink}
                  to={`/${page.toLowerCase()}`}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </MuiLink>
              ))}
            </Box>

            <Routes>
              <Route
                path="/posts"
                element={
                  <Button component={Link} to="/posts/add" sx={{ mr: 1 }} color="inherit">
                    Add new post
                  </Button>
                }
              ></Route>
              <Route
                path="/posts/:postId"
                element={
                  <Button
                    component={Link}
                    to={`/posts/edit/${location.pathname.split('/')[2]}`}
                    sx={{ mr: 1 }}
                    color="inherit"
                  >
                    Edit post
                  </Button>
                }
              ></Route>
              <Route path="/posts/add" element={null}></Route>
              <Route path="/posts/edit" element={null}></Route>
              <Route path="*" element={null}></Route>
            </Routes>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              component={Link}
              to="/"
            >
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Header;
