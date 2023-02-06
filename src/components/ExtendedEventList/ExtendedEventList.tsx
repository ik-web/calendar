import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  IconButton,
  Box,
  Modal
} from '@mui/material';

import { EventList } from '@/components/EventList/EventList';
import { IEventItem } from '../DayCell/DayCell';
import { ExtendedEventListHead, ExtendedEventListStyles } from './extendedEventListStyles';

interface IExtendedEventListProps {
  setIsExtendedEventList: (param: boolean) => void;
  eventData: IEventItem[];
  isOpen: boolean;
}

export const ExtendedEventList: React.FC<IExtendedEventListProps> = ({
  setIsExtendedEventList,
  eventData,
  isOpen
}) => {
  const handleClick = () => {
    setIsExtendedEventList(false);
  };

  const date: Date = new Date();
  const dayNumber = date.getDate();
  const monthName = date.toLocaleString('en-US', {month: 'long'});
  const year = date.getFullYear();
  const dateString: string = `${dayNumber}-${monthName}-${year}`;

  return (
    <Modal open={isOpen}>
      <Box sx={ExtendedEventListStyles}>
        <ExtendedEventListHead>
          <Box>{dateString}</Box>

          <IconButton onClick={handleClick}>
            <HighlightOffIcon color="primary" />
          </IconButton>
        </ExtendedEventListHead>

        <EventList eventData={eventData} />
      </Box>
    </Modal>
  );
};
