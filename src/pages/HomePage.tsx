import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, Box, Container, Typography, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';// צור ערכת נושא מותאמת אישית
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CategoryIcon from '@mui/icons-material/Category';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default function HomePage() {
  const backgroundImage = require(`../images/home.png`);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '50vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            RENT DRESS ברוכים הבאים ל
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ flexGrow: 2 }}>
            <Box sx={{ p: 2, backgroundColor: '#f0f0f5', borderRadius: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <TravelExploreIcon/>
              <Typography variant="h6" component="h3">
                פריסה ארצית
              </Typography>
              <Typography>
                בכל רחבי הארץ
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ flexGrow: 2 }}>
            <Box sx={{ p: 2, backgroundColor: '#f0f0f5', borderRadius: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <SupportAgentIcon/>
              <Typography variant="h6" component="h3">
                   שירות לקוחות
              </Typography>
              <Typography>
                זמינות 24*6
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ flexGrow: 2 }}>
            <Box sx={{ p: 2, backgroundColor: '#f0f0f5', borderRadius: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CategoryIcon/>
              <Typography variant="h6" component="h3">
                מבחר גדול
              </Typography>
              <Typography>
                מכל המידות והסוגים
              </Typography>
            </Box>
          </Grid>
          {/* ניתן להוסיף עוד חלוקות כאן */}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
