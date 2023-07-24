import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  const { authError } = useAuth();

  useEffect(() => {
    if (authError) alert(authError);
  }, [authError]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
