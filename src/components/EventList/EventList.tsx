import { useAppContext } from '@/hooks/useAppContext';
import React from 'react';

import { IEventItem } from '../DayCell/DayCell';
import { CustomList, CustomListButton, CustomListItem } from './eventListStyles';

interface EventListProps {
  eventData: IEventItem[]
}

export const EventList: React.FC<EventListProps> = ({ eventData }) => {
  const { openEditEventMode } = useAppContext();

  return (
    <CustomList>
      {eventData.map((eventItem: IEventItem) => (
        <CustomListItem key={eventItem.id}>
          <CustomListButton onClick={openEditEventMode}>
            {eventItem.title}
          </CustomListButton>
        </CustomListItem>
      ))}
    </CustomList>
  );
};
