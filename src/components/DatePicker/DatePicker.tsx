import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { CustomButton } from './datePickerStyles';

export const DatePicker: React.FC = () => {
  return (
    <CustomButton>
      <CalendarTodayIcon fontSize='small' sx={{fill: "#000000"}} />
    </CustomButton>
  );
};
