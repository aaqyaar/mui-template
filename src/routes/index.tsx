import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

import MainLayout from 'layouts/main';
import DashboardLayout from 'layouts/dashboard';
import LogoOnlyLayout from 'layouts/LogoOnlyLayout';

import { AuthGuard, GuestGuard, RoleBasedGuard } from 'guards';

// components
import LoadingScreen from 'components/LoadingScreen';
import { PATH_ADMIN } from './paths';

// ----------------------------------------------------------------------

const Loadable = (Component: React.FC) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        // { path: 'reset-password', element: <ResetPassword /> },
      ],
    },
    {
      path: 'dashboard',
      element: <Navigate to={`${PATH_ADMIN.directories.overview}`} replace />,
    },
    {
      path: 'admin',
      element: (
        <AuthGuard>
          <RoleBasedGuard
            accessibleRoles={['admin', 'brandManager', 'superAdmin']}
          >
            <DashboardLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        {
          element: (
            <Navigate to={`${PATH_ADMIN.directories.overview}`} replace />
          ),
        },

        // Directories
        { path: `${PATH_ADMIN.directories.overview}`, element: <GeneralApp /> },

        // settings
        {
          path: `${PATH_ADMIN.directories.settings.root}`,
          children: [
            {
              path: `${PATH_ADMIN.directories.settings.general}`,
              element: <GeneralSettings />,
            },
          ],
        },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'maintenance', element: <Maintenance /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <LandingPage /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// // Authentication
const Login = Loadable(lazy(() => import('pages/auth/Login')));
// const ResetPassword = Loadable(
//   lazy(() => import('pages/authentication/ResetPassword'))
// );

// Dashboard
const GeneralApp = Loadable(lazy(() => import('pages/dashboard/GeneralApp')));
const GeneralSettings = Loadable(
  lazy(() => import('pages/dashboard/GeneralSettings'))
);
// Main
const LandingPage = Loadable(lazy(() => import('pages/LandingPage')));
const Maintenance = Loadable(lazy(() => import('pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('pages/Page500')));
const NotFound = Loadable(lazy(() => import('pages/Page404')));
