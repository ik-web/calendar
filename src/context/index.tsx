import { createContext, useState } from "react";

interface AppProviderProps {
  children: JSX.Element;
}

export interface IAppContext {
  createEventMode: boolean;
  editEventMode: boolean;
  openCreateEventMode: () => void;
  openEditEventMode: () => void;
  closeEventModal: () => void;
}

export const AppContext = createContext<IAppContext>({
  createEventMode: false,
  editEventMode: false,
  openCreateEventMode: () => {},
  openEditEventMode: () => {},
  closeEventModal: () => {},
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [createEventMode, setCreateEventMode] = useState<boolean>(false);
  const [editEventMode, setEditEventMode] = useState<boolean>(false);

  const openCreateEventMode = () => {
    if (!createEventMode) setCreateEventMode(true);
  }

  const openEditEventMode = () => {
    if (!editEventMode) setEditEventMode(true);
  }

  const closeEventModal = () => {
    if (createEventMode) setCreateEventMode(false);
    if (editEventMode) setEditEventMode(false);
  }

  const contextValue: IAppContext = {
    createEventMode,
    editEventMode,
    openCreateEventMode,
    openEditEventMode,
    closeEventModal,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
};
