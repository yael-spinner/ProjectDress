import React, { useState, FormEvent, ChangeEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { addUser } from '../services/user.service';
import { FullUserType } from '../types/user.types';
import { signIn } from '../services/auth.service';
import { setSession } from '../auth/utils';
import { setUser } from '../redux/auth/auth.slice';
import { PATHS } from '../routes/paths';

export default function SignUp() {
  const [formData, setFormData] = useState<FullUserType>({
    profileImagePath: '',
    profileImage: undefined,
    fullName: '',
    email: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const validate = () => {
    let isValidData = true;
    const temp = { ...errors };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(formData.email);
    if (!formData.email || formData.email === '' || !isValid) {
      isValidData = false;
      temp.email = 'כתובת האימייל אינה תקינה';
    } else temp.email = '';
    if (!formData.password || formData.password === '' || formData.password.length < 6) {
      isValidData = false;
      temp.password = 'הסיסמה אינה תקינה, יש להזין לפחות 6 תווים';
    } else temp.password = '';
    if (!formData.fullName || formData.fullName === '') {
      isValidData = false;
      temp.fullName = 'שם מלא הוא שדה חובה';
    } else temp.fullName = '';
    setErrors(temp);
    return isValidData;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      const newUser = new FormData();
      newUser.append('fullName', formData.fullName);
      newUser.append('email', formData.email);
      newUser.append('password', formData.password);

      if (profileImage) newUser.append('profileImage', profileImage);

      try {
        const res = await addUser(newUser);
        const token = (await signIn(formData.email, formData.password)).data;
        setSession(token);
        setUser({ id: res.data, fullName: formData.fullName, email: formData.email });
        window.location.href = `${PATHS.Home}`;
      } catch (error) {
        console.log("ERROR", error);
        setErrors({ ...errors, email: 'כתובת האימייל כבר רשומה במערכת, בבקשה נסה שוב' });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          הרשמה
        </Typography>
        <form noValidate onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1rem' }}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="fullName"
                fullWidth
                id="fullName"
                label="שם מלא"
                value={formData.fullName}
                onChange={handleInputChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                autoFocus
                style={{ textAlign: 'right' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="אימייל"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                style={{ textAlign: 'right' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="סיסמה"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                InputLabelProps={{ dir: 'ltr' }}

              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                id="profileImage"
                name="profileImage"
                type="file"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="profileImage">
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth component="span">
                    העלה תמונת פרופיל
                  </Button>
                </Grid>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" style={{ marginTop: '1rem' }}>
                הרשמה
              </Button>

              <Grid item xs={12}>
                <Box style={{ textAlign: 'start' }}>
                  <Link href="signIn" variant="body2">
                    כבר רשום? הכנס לאתר
                  </Link>
                </Box>
              </Grid>
            </Grid>
            </Grid>
        </form>
      </Box>
    </Container>
  );
}