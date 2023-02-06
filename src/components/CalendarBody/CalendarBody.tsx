import React from 'react';
import { Table, TableBody, TableRow } from '@mui/material';

import { DayCell } from '@/components';

const getMonth = () => [
  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
];

const getDayName = (date: Date) => {
  return date.toLocaleString('en-US', { weekday: 'short' })
  .slice(0, 2)
};

export const CalendarBody: React.FC = () => {
  const month = getMonth();
  const isToday = true;

  return (
    <Table>
      <TableBody>
        {month.map((week, i) => (
          <TableRow key={i}>
            {week.map((date, i) => (
              <DayCell
                key={i}
                dayName={getDayName(date)}
                dayNumber={date.getDate()}
                isToday={isToday}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
