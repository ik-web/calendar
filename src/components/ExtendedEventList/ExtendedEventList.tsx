import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  IconButton,
  Box,
  styled,
  Modal
} from '@mui/material';

import { EventList } from '@/components/EventList/EventList';
import { IEventItem } from '../DayCell/DayCell';

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

const ExtendedEventListStyles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: '8px 24px 24px',
};

const ExtendedEventListHead = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 600,
});
