import { createHashRouter } from 'react-router-dom';

import { Home } from '@/pages';
import { AppProvider } from '@/context';

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <Home />
      </AppProvider>
    ),
  },
]);
