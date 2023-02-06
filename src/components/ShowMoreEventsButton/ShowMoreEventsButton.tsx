import React from 'react';

import { CustomListButton } from '../EventList/eventListStyles';

interface IShowMoreEventsButtonProps{
  setIsExtendedEventList: (param: boolean) => void;
}

export const ShowMoreEventsButton: React.FC<IShowMoreEventsButtonProps> = ({ setIsExtendedEventList }) => {
  const handleClick = () => {
    setIsExtendedEventList(true);
  }

  return (
    <CustomListButton onClick={handleClick}>
      more events...
    </CustomListButton>
  );
};
