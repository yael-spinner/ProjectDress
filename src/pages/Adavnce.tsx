import { Season } from "../types/Season";
import { ShortOrLong } from "../types/ShortOrLong";
import { Color } from "../types/Color";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { Button, Input } from '@mui/material';
import { RentToAnyoneType } from "../types/rentToAnyone.type";
import { DressType } from "../types/dress.type";
import { AddRentToAnyone } from "../services/rentToAnyone.service";
import { AddDress } from "../services/dress.service";
import { ChangeEvent, useState } from "react";

const FormGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  textAlign: 'right',
}));

const rtlPlaceholder = {
  textAlign: 'right'
};

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    textAlign: 'right',
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
  },
}));

// Convert Enum to list of options
const getEnumOptions = (enumType: any) => {
  return Object.keys(enumType).filter(key => isNaN(Number(key))).map(key => ({
    value: enumType[key],
    label: key
  }));
}

export default function Advance() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [city, setCity] = useState('');
  const [phon, setPhon] = useState('');
  const [email, setEmail] = useState('');
  const [season, setSeason] = useState<string>('');
  const [long, setLong] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [describe, setDescribe] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('36');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    setter(event.target.value as string);
  };


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("אנא בחרי תמונה להעלאה.");
      return;
    }


    function getEnumValueByKey(enumType: any, key: string): number {
      const enumKey = Object.keys(enumType).find(k => enumType[k] === key);
      return enumKey !== undefined ? enumType[enumKey] : undefined;
    }

    try {
      const r = await AddRentToAnyone(`${firstName} ${lastName}`, city, phon, email);
      console.log("AddRentToAnyone", r);
      console.log(r.id);
      const dress = await AddDress(parseInt(size), getEnumValueByKey(Color, color), describe, getEnumValueByKey(ShortOrLong, long), getEnumValueByKey(Season, season), parseInt(price), selectedFile, r.id)
      console.log(dress);

      console.log("הצלחתי!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={3} sx={{ width: '80%', margin: '0 auto', paddingTop: '2%', paddingBottom: '7%' }}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>שם משפחה</FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          type="last-name"
          placeholder="אלמוני"
          autoComplete="last name"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setLastName)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>שם פרטי</FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="פלוני"
          autoComplete="first name"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setFirstName)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>עיר</FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="עיר מגורים"
          autoComplete="shipping address-line1"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setCity)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="email" required>מייל</FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="example @ gmail.com"
          autoComplete="shipping address-line2"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setEmail)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="phon" required>טלפון</FormLabel>
        <OutlinedInput
          id="phon"
          name="phon"
          type="phon"
          placeholder="טלפון זמין"
          autoComplete="shipping address-line2"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setPhon)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="describe" required>תיאור על השמלה</FormLabel>
        <OutlinedInput
          id="describe"
          name="describe"
          type="describe"
          placeholder="תספרי על השמלה :)"
          autoComplete="State"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setDescribe)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <StyledSelect
            value={season}
            onChange={handleSelectChange(setSeason)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            required
          >
            <MenuItem value="" sx={{ justifyContent: 'flex-end' }}>
              <em>עונה</em>
            </MenuItem>
            {getEnumOptions(Season).map(option => (
              <MenuItem key={option.value} value={option.value} sx={{ justifyContent: 'flex-end' }}>
                {option.label}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <StyledSelect
            value={color}
            onChange={handleSelectChange(setColor)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            required
          >
            <MenuItem value="" sx={{ justifyContent: 'flex-end' }}>
              <em>צבע</em>
            </MenuItem>
            {getEnumOptions(Color).map(option => (
              <MenuItem key={option.value} value={option.value} sx={{ justifyContent: 'flex-end' }}>
                {option.label}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="price" required>מחיר</FormLabel>
        <OutlinedInput
          id="price"
          name="price"
          type="price"
          placeholder="00.00"
          autoComplete="shipping address-line2"
          required
          inputProps={{ dir: 'rtl' }}
          sx={rtlPlaceholder}
          onChange={handleInputChange(setPrice)}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="size" required>מידה</FormLabel>
        <OutlinedInput
          id="size"
          name="size"
          type="size"
          placeholder="1-54"
          autoComplete="shipping address-line2"
          required
          inputProps={{ dir: 'rtl' }} // שינוי כיוון ה-input לימין לשמאל
          sx={rtlPlaceholder}
          onChange={handleInputChange(setSize)}
        />
      </FormGrid>

      <FormGrid item xs={6}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <StyledSelect
            value={long}
            onChange={handleSelectChange(setLong)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            required
          >
            <MenuItem value="" sx={{ justifyContent: 'flex-end' }}>
              <em>אורך</em>
            </MenuItem>
            {getEnumOptions(ShortOrLong).map(option => (
              <MenuItem key={option.value} value={option.value} sx={{ justifyContent: 'flex-end' }}>
                {option.label}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      </FormGrid>

      <FormGrid item xs={6}>
        <Input
          id="image-upload"
          type="file"
          sx={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload">
          <Button variant="contained" component="span">
            העלאת תמונה
          </Button>
        </label>
        {selectedFile && <p>התמונה שנבחרה: {selectedFile.name}</p>}
      </FormGrid>
      <FormGrid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>
          שלח
        </Button>
      </FormGrid>

    </Grid>

  );
}
