import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import { Box, Button, FormControl, InputAdornment, styled, TextField } from '@mui/material';

export const CustomButtonsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '12px',
  marginTop: '120px',
  padding: '32px 24px',
  borderTop: '1px solid #808080',
});

export const CustomFormHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CustomBox = styled(Box)({
  marginTop: '16px',
});

const inputLabelStyle = {
  transform: 'none',
  fontSize: '12px',
};

export const CustomFormControl = styled(FormControl)({
  '&.MuiFormControl-root': {
    width: '100%',
  },
  '& label': inputLabelStyle,
});

export const CustomDeleteButton = styled(Button)({
  minWidth: '32px',
  padding: '6px 8px',
});

export const CustomInputsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CustomDateInput = styled(TextField)({
  width: '160px',
  '& label': inputLabelStyle,
});

export const CustomTimeInput = styled(TextField)({
  width: '80px',
  '& label': inputLabelStyle,
});

export const CustomReplayCircle = styled(ReplayCircleFilledIcon)({
  fill: '#33b964',
  transform: 'rotate(135deg)',
});
