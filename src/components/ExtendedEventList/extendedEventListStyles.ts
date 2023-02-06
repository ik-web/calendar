import { Box, styled } from '@mui/material';

export const ExtendedEventListStyles = {
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

export const ExtendedEventListHead = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 600,
});
