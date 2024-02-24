import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
