import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" sx={{ mt: 10 }} style={{ fontFamily: 'Your Chosen Font, sans-serif' }}>
        החברה שלנו
      </Typography>
      <Typography variant="h4" align="justify" style={{ fontFamily: 'Your Chosen Font, sans-serif' }}>
        משמשת כגשר בין אנשים שרוצים להשכיר שמלות מעוצבות וייחודיות לאירועים שונים, לבין מעצבים עצמאיים שרוצים לשתף את שמלתיהם .
        באמצעות האתר, משתמשים יכולים לדפדף במבחר רחב של שמלות וליצור קשר ישירות עם המשכיר. זוהי פלטפורמה ייחודית שמבטיחה חווית אונליין נוחה ובטוחה לשני הצדדים, המאפשרת למשכירים להציע את השמלות שלהם ולמשתמשים למצוא את הלבוש המושלם לאירועים החשובים בחייהם.
      </Typography>
    </Container>
  );
};
