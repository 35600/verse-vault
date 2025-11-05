// Layout.js
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';

const Layout = () => {
  const location = useLocation();
  const hideTopBar = ['/login', '/register'].includes(location.pathname);

  return (
    <>
      {!hideTopBar && <TopBar />}
      <Outlet />
    </>
  );
};

export default Layout;
