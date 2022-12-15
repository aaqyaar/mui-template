import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Outlet } from 'react-router-dom';
// material
import { Box, Link, Container, Typography } from '@mui/material';
// components

import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

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
              <img
                src=""
                alt="Logo"
                style={{
                  cursor: 'pointer',
                  margin: '0 auto',
                  marginBottom: 1,
                }}
              />
            </ScrollLink>

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="https://abdizamedmo.netlify.app/">Abdi Zamed</Link>
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
