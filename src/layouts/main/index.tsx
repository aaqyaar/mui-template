import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Outlet } from 'react-router-dom';
// material
import { Box, Link, Container, Typography } from '@mui/material';
// components

import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';
import { Logo } from 'components';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <ScrollLink to="move_top" spy smooth>
              <Logo
                sx={{
                  cursor: 'pointer',
                  mx: 'auto',

                  width: 100,
                  height: 100,
                }}
              />
            </ScrollLink>

            <Typography variant="caption" component="p">
              © {new Date().getFullYear()} All rights reserved
              <br /> made by &nbsp;
              <Link href="https://abdizamedmo.netlify.app/">Abdi Zamed</Link>
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
