import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography
} from '@mui/material';

import {
  CustomBox,
  CustomButtonsContainer,
  CustomDateInput,
  CustomDeleteButton,
  CustomFormControl,
  CustomFormHeader,
  CustomInputsContainer,
  CustomReplayCircle,
  CustomTimeInput,
} from './eventFormStyles';
import { useAppContext } from '@/hooks/useAppContext';

interface EventFormProps {
  editMode: boolean;
}

export const EventForm: React.FC<EventFormProps> = ({ editMode }) => {
  const { closeEventModal } = useAppContext();
  const [ describeText, setDescribeText ] = useState<string>('');

  const title = editMode ? 'Edit idea item' : 'Add new idea item';
  const dateOfCreating = `Created at: ${'23.12.2020'} ${'12:12'}`;
  const dateOfUpdating = `Updated at: ${'25.12.2020'} ${'12:17'}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleResetDescribe = () => {
    setDescribeText('');
  }

  const handleSave = () => {
    console.log('Event was saved');
    closeEventModal();
  };

  const handleDelete = () => {
    console.log('Event was deleted');
    closeEventModal();
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescribeText(e.currentTarget.value);
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <CustomFormHeader>
        <Box>
          <Typography variant="h1" sx={{ fontSize: '28px' }}>
            {title}
          </Typography>

          {editMode && (
            <Typography color="#808080" fontSize="small">
              {dateOfCreating}
            </Typography>
          )}
        </Box>

        <IconButton onClick={closeEventModal}>
          <CloseIcon />
        </IconButton>
      </CustomFormHeader>

      <CustomBox>
        <CustomFormControl variant="standard" required>
          <InputLabel htmlFor="eventFormTitle">Title</InputLabel>
          <Input
            id="eventFormTitle"
            type="text"
            placeholder="Title goes here"
            endAdornment={
              <InputAdornment position="end" sx={{mb: '12px'}}>
                <IconButton>
                  <ListAltIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </CustomFormControl>
      </CustomBox>

      <CustomBox>
        <CustomFormControl variant="standard">
          <InputLabel htmlFor="eventFormDescribe">Description</InputLabel>
          <Input
            id="eventFormDescribe"
            value={describeText}
            onChange={handleChange}
            multiline
            rows={3}
            endAdornment={editMode && (
              <InputAdornment position="end" sx={{alignItems: 'start', mb: '24px'}}>
                <IconButton onClick={handleResetDescribe}>
                  <CustomReplayCircle fontSize="large" />
                </IconButton>
              </InputAdornment>
            )}
          />
        </CustomFormControl>
      </CustomBox>

      <CustomBox>
        <CustomInputsContainer>
          <CustomDateInput label="Date" variant="standard" type="date" />
          <CustomTimeInput label="Begin time" variant="standard" type="time" />
        </CustomInputsContainer>
      </CustomBox>

      <CustomButtonsContainer>
        {editMode && (
          <CustomDeleteButton
            variant="contained"
            color="error"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </CustomDeleteButton>
        )}

        <Button
          variant="contained"
          sx={{ background: '#222' }}
          onClick={handleSave}
        >
          Save
        </Button>
      </CustomButtonsContainer>
    </Box>
  );
};
