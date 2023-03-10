import Login from 'pages/auth/Login';
import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { pathname }: any = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);
  const isAuthenticated = true;
  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
