import { createHashRouter } from 'react-router-dom';

import { EventModal, Home } from '@/pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/event/:date',
    element: <EventModal />,
  },
]);
