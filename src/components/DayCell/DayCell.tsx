import React from 'react';
import { Box } from '@mui/material';

import {
  EventList,
  ExtendedEventList,
  ShowMoreEventsButton
} from '@/components';
import { CustomCellHeading, CustomTableCell, CustomTableCellInner } from './dayCellStyles';

export interface IEventItem {
  id: number;
  date: string;
  time: string;
  title: string;
  describe: string;
}

const eventData: IEventItem[] = [
  { id: 1, date: '10-10-2023', time: '10:00', title: 'Event title', describe: 'Event description' },
  { id: 2, date: '10-10-2023', time: '10:30', title: 'Event title', describe: 'Event description' },
  { id: 3, date: '10-10-2023', time: '11:30', title: 'Event title', describe: 'Event description' },
  { id: 5, date: '10-10-2023', time: '14:30', title: 'Event title', describe: 'Event description' },
  { id: 6, date: '10-10-2023', time: '15:30', title: 'Event title', describe: 'Event description' },
  { id: 7, date: '10-10-2023', time: '16:30', title: 'Event title', describe: 'Event description' },
  { id: 8, date: '10-10-2023', time: '17:30', title: 'Event title', describe: 'Event description' },
  { id: 9, date: '11-10-2023', time: '10:30', title: 'Event title', describe: 'Event description' },
];

interface IDayCellProps {
  dayName: string;
  dayNumber: number;
  isToday: boolean;
}

export const DayCell: React.FC<IDayCellProps> = ({
  dayName,
  dayNumber,
  isToday
}) => {
  const [isExtendedEventList, setIsExtendedEventList] = React.useState<boolean>(false);

  return (
    <CustomTableCell sx={{ background: isToday ? '#d7f8d7' : '' }}>
      <CustomTableCellInner>
        <CustomCellHeading component="h4">
          <Box component="span">{dayNumber}</Box>
          <Box component="span">{dayName}</Box>
        </CustomCellHeading>

        {eventData.length < 3
          ? <EventList eventData={eventData} />
          : <>
              <EventList eventData={eventData.slice(0, 2)} />
              <ShowMoreEventsButton setIsExtendedEventList={setIsExtendedEventList} />
            </>
        }
      </CustomTableCellInner>

      {isExtendedEventList && (
        <ExtendedEventList
          setIsExtendedEventList={setIsExtendedEventList}
          eventData={eventData}
          isOpen={isExtendedEventList}
        />
      )}
    </CustomTableCell>
  );
};
