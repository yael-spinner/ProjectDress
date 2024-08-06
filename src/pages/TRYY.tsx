import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { PhotoCamera } from '@mui/icons-material';

interface CommentFormProps {
  onSubmit: (name: string, comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(name, comment);
    setName('');
    setComment('');
  };

  return (
    <Grid container spacing={3} sx={{ width: '80%', margin: '0 auto', paddingTop: '5%', paddingBottom: '5%' }}>
      <FormLabel htmlFor="last-name" required>
        שם משפחה
      </FormLabel>
      <OutlinedInput
        id="last-name"
        name="last-name"
        type="last-name"
        placeholder="אלמוני"
        autoComplete="last name"
        required
        inputProps={{ dir: 'rtl' }} // שינוי כיוון ה-input לימין לשמאל
      />

    </Grid>

  );
}

export default CommentForm;
