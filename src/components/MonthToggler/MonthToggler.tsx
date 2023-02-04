import React from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  IconButton,
  styled,
  Typography
} from '@mui/material';

export const MonthToggler: React.FC = () => {
  const month = new Date().toLocaleString('en-US', { month: 'long' });
  const year = new Date().getFullYear();
  const mockText = `${month} ${year}`;

  return (
    <Wrapper>
      <IconButton>
        <NavigateBeforeIcon sx={buttonIconFill} />
      </IconButton>

      <Typography>
        {mockText}
      </Typography>

      <IconButton>
        <NavigateNextIcon sx={buttonIconFill} />
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const buttonIconFill = {
  color: '#000000',
};
