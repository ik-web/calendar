import { useContext } from 'react';

import { AppContext, IAppContext } from '@/context';

export const useAppContext = () => useContext<IAppContext>(AppContext);
