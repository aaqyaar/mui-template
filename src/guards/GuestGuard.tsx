import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { PATH_DASHBOARD } from '../routes/paths';

export default function GuestGuard({ children }: { children: ReactNode }) {
  // const { auth } = useSelector((state) => state);
  // const { isAuthenticated } = auth;
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
