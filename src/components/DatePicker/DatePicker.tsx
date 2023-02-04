import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

export const DatePicker: React.FC = () => {
  return (
    <CustomButton>
      <CalendarTodayIcon fontSize='small' sx={{fill: "#000000"}} />
    </CustomButton>
  );
};

const CustomButton = styled(Button)({
  minWidth: "56px",
  border: 'solid 1px #808080'
})