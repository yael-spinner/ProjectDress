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
import { login } from '../services/auth.service';
import { Navigate } from 'react-router-dom';
import { setUser } from '../redux/auth/auth.slice';
import { setSession } from '../auth/utils';
import { AuthUserType } from '../types/user.types';
import { useDispatch } from 'react-redux';
import { RentUserType } from '../types/rentUser';
import { getUserRentByNameAndPassword } from '../services/rentUser.service';
import { addRentSlice } from '../redux/rent/rent.slice';
import { setRentalsSlice } from '../redux/rentals/rentals.slice';
import { DressType } from '../types/dress.type';
import { getAllDress } from '../services/dress.service';
import { setDressSlice } from '../redux/dress/dress.slice';

export default function SignIn() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    const data = new FormData(event.currentTarget);
    const name = data.get('name') as string;
    const password = data.get('password') as string;
    try {
      event.preventDefault();
      await userLogin(name, password);
      setLoggedIn(true);
    } catch (error) {
      alert('סיסמא או שם משתמש שגוי, אנא נסה שנית')
      console.error('Login failed:', error);
    }
  };
  const dispatch = useDispatch()
  const userLogin = async (name: string, password: string) => {
    try {
      const authUser: AuthUserType = await login(name, password);
      console.log('Login successful, token:', authUser);
      dispatch(setUser(authUser.user))
      setSession(authUser)
      const rentUser: RentUserType = await getUserRentByNameAndPassword(name, password);
      const dresses: DressType[] = await getAllDress();
      console.log('אחרי קריאת למצוא את המשתמש')
      console.log(rentUser)
      dispatch(setDressSlice(dresses));
      dispatch(addRentSlice(rentUser));
      dispatch(setRentalsSlice(rentUser.rentals));

    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const defaultTheme = createTheme();

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
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href={PATHS.signUp} variant="body2">
                  {"אין לך חשבון עדיין? התחבר"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {loggedIn && <Navigate to={PATHS.home} />}
      </Container>
    </ThemeProvider>
  );
}

