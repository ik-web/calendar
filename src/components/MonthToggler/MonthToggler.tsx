import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton, Typography } from '@mui/material';

import { buttonIconFill, Wrapper } from './monthTogglerStyles';

export const MonthToggler: React.FC = () => {
  const month = new Date().toLocaleString('en-US', { month: 'long' });
  const year = new Date().getFullYear();
  const mockText = `${month} ${year}`;

  return (
    <Wrapper>
      <IconButton>
        <NavigateBeforeIcon sx={buttonIconFill} />
      </IconButton>

      <Typography>{mockText}</Typography>

      <IconButton>
        <NavigateNextIcon sx={buttonIconFill} />
      </IconButton>
    </Wrapper>
  );
};
