import { styled, TableCell, Box } from '@mui/material';

export const CustomTableCell = styled(TableCell)({
  height: '120px',
  padding: '4px 8px',
  background: '#ffffd9',
  border: '1px solid #808080',
});

export const CustomCellHeading = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 0 4px',
});

export const CustomTableCellInner = styled(Box)({
  height: '100%',
});
