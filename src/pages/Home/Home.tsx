import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Box,
  Container,
  IconButton,
  styled
} from '@mui/material';

import {
  Calendar,
  DatePicker,
  MonthToggler,
} from '@/components';

export const Home: React.FC = () => {
  return (
    <Container sx={{ minWidth: '990px' }}>
      <CalendarHead>
        <IconButton>
          <AddCircleIcon color="primary" fontSize="large" />
        </IconButton>

        <CalendarMenu>
          <MonthToggler />
          <DatePicker />
        </CalendarMenu>
      </CalendarHead>

      <Calendar />
    </Container>
  );
};

const CalendarHead = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
});

const CalendarMenu = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});
