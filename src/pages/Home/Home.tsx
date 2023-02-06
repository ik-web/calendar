import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Container, IconButton } from '@mui/material';

import { AppProvider } from '@/context';
import { useAppContext } from '@/hooks/useAppContext';
import { CalendarHead, CalendarMenu } from './homeStyles';
import {
  CalendarBody,
  DatePicker,
  MonthToggler,
  EventModal
} from '@/components';

export const Home: React.FC = () => {
  const {
    createEventMode,
    editEventMode,
    openCreateEventMode
  } = useAppContext();

  return (
    <Container sx={{ minWidth: '990px' }}>
      {createEventMode && <EventModal />}
      {editEventMode && <EventModal editMode={true} />}

      <Box>
        <CalendarHead>
          <IconButton onClick={openCreateEventMode}>
            <AddCircleIcon color="primary" fontSize="large" />
          </IconButton>

          <CalendarMenu>
            <MonthToggler />
            <DatePicker />
          </CalendarMenu>
        </CalendarHead>

        <CalendarBody />
      </Box>
    </Container>
  );
};
