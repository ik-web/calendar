import React from 'react';
import {
  Button,
  List,
  ListItem,
  styled
} from '@mui/material';

import { IEventItem } from '../DayCell/DayCell';

interface EventListProps {
  eventData: IEventItem[]
}

export const EventList: React.FC<EventListProps> = ({ eventData }) => {
  return (
    <CustomList>
      {eventData.map((eventItem: IEventItem) => (
        <CustomListItem key={eventItem.id}>
          <CustomListButton>
            {eventItem.title}
          </CustomListButton>
        </CustomListItem>
      ))}
    </CustomList>
  );
};

const CustomList = styled(List)({
  padding: 0,
});

const CustomListItem = styled(ListItem)({
  marginBottom: '4px',
  padding: 0,
});

export const CustomListButton = styled(Button)({
  justifyContent: "flex-start",
  width: "100%",
  padding: '2px 8px',
  fontSize: '12px',
  textTransform: "none",
  color: '#808080',
  background: '#d8d8cf',
  borderRadius: '4px',
  cursor: 'pointer',

  "&:hover": {
    color: '#000',
    background: '#d8d8cf',
  }
});
