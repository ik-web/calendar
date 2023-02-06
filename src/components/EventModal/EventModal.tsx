import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { EventForm } from '@/components';
import { Box } from '@mui/material';

import { useAppContext } from '@/hooks/useAppContext';
import { modalStyles } from './eventModalStyles';

interface EventModalProps {
  editMode?: boolean;
}

export const EventModal: React.FC<EventModalProps> = ({ editMode = false }) => {
  const { createEventMode, editEventMode } = useAppContext();
  const open = createEventMode || editEventMode;

  return (
    <div>
      <Modal open={open}>
        <Box sx={modalStyles}>
          <EventForm editMode={editMode} />
        </Box>
      </Modal>
    </div>
  );
};
