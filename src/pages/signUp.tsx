import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PATHS } from '../routes/paths';
import { AddUserRent } from '../services/rentUser.service';
import { Navigate } from 'react-router-dom'; // Import Navigate from React Router
import { useDispatch } from 'react-redux';
import { RentUserType } from '../types/rentUser';
import { addRentSlice } from '../redux/rent/rent.slice';
import { setSession } from '../auth/utils';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [loggedIn, setLoggedIn] = React.useState(false); // State to track login status
  const dispatch = useDispatch()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const password = data.get('password') as string;

    try {
      event.preventDefault();
      await userSignUp(firstName, lastName, password);
      setLoggedIn(true); // Set loggedIn to true upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  const userSignUp = async (firstName: string, lastName: string, password: string) => {
    try {
      const userRent:RentUserType = await AddUserRent(firstName, lastName, password);
      console.log('Login successful, token:', userRent);
      dispatch(addRentSlice(userRent))
    } catch (error) {
      throw new Error('Login failed');
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הרשמה
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={PATHS.login} variant="body2">
                  יש לך כבר חשבון? התחבר
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        {loggedIn && <Navigate to={PATHS.login} />}
      </Container>
    </ThemeProvider>
  );
}