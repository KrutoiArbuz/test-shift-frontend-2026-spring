import { useEffect } from 'react';
import { Outlet, useRevalidator } from 'react-router';

import { setRevalidator } from '@/config/revalidator';

function App() {
  const revalidator = useRevalidator();

  useEffect(() => {
    setRevalidator({ revalidate: revalidator.revalidate });
    return () => setRevalidator(null);
  }, [revalidator.revalidate]);

  return <Outlet />;
}

export default App;
