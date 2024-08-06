// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { DressType } from '../types/dress.type';
// import ShowDress from './ShowDress';

// type Props = {
//   dress: DressType
// }

// export default function DressCard({ dress }: Props) {
//   const [showDress, setShowDress] = useState(false);
//   const image = require(`../images/${dress.urlImage}`);

//   const handleShowDress = () => {
//     setShowDress(true);
//   };
//   return (
//     <div>
//       {showDress && <ShowDress key={dress.id} dress={dress} />}
//       <Card sx={{ display: 'flex', flexDirection: 'row-reverse', flex: '1 0 33%', maxWidth: 345 }}>
//         <CardActionArea onClick={handleShowDress}>
//           <CardContent sx={{ textAlign: 'right' }}>
//             <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right' }}>
//             <img src={image} alt="תמונה" style={{ width: '250px', height: '350px' }} />
//               <br />
//               <span style={{ fontWeight: 'bold', color: 'darkblue' }}>תיאור: {dress.describe}</span>
//               <br />
//               <span style={{ fontWeight: 'bold', color: 'darkblue' }}>מחיר: {dress.price}</span>
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
// }




// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { DressType } from '../types/dress.type';
// import { Link } from 'react-router-dom';
// import { PATHS } from '../routes/paths';

// type Props = {
//   dress: DressType
// }

// export default function DressCard({ dress }: Props) {
//   const image = require(`../images/${dress.urlImage}`);

//   return (
//     <Link to={PATHS.showDress} style={{ textDecoration: 'none' }}>
//       <Card sx={{ display: 'flex', flexDirection: 'row-reverse', flex: '1 0 33%', maxWidth: 345 }}>
//         <CardActionArea>
//           <CardContent sx={{ textAlign: 'right' }}>
//             <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right' }}>
//               <img src={image} alt="תמונה" style={{ width: '250px', height: '350px' }} />
//               <br />
//               <span style={{ fontWeight: 'bold', color: 'darkblue' }}>תיאור: {dress.describe}</span>
//               <br />
//               <span style={{ fontWeight: 'bold', color: 'darkblue' }}>מחיר: {dress.price}</span>
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </Link>
//   );
// }


// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { DressType } from '../types/dress.type';
// import { PATHS } from '../routes/paths';

// type Props = {
//   dress: DressType
// }

// export default function DressCard({ dress }: Props) {
//   const image = require(`../images/${dress.urlImage}`);

//   const handleCardClick = () => {
//     window.location.href = PATHS.showDress; // Manually navigate to the showDress route
//   };

//   return (
//     <Card sx={{ display: 'flex', flexDirection: 'row-reverse', flex: '1 0 33%', maxWidth: 345 }} onClick={handleCardClick}>
//       <CardActionArea>
//         <CardContent sx={{ textAlign: 'right' }}>
//           <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right' }}>
//             <img src={image} alt="תמונה" style={{ width: '250px', height: '350px' }} />
//             <br />
//             <span style={{ fontWeight: 'bold', color: 'darkblue' }}>תיאור: {dress.describe}</span>
//             <br />
//             <span style={{ fontWeight: 'bold', color: 'darkblue' }}>מחיר: {dress.price}</span>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { DressType } from '../types/dress.type';
import { PATHS } from '../routes/paths';
import { Navigate } from 'react-router-dom';
import ShowDress from './ShowDress';

type Props = {
  dress: DressType
}

export default function DressCard({ dress }: Props) {
  const image = require(`../images/${dress.urlImage}`);
  // const image = require(`${dress.urlImage}`);

  const handleCardClick = () => {
    window.location.href = `/home/showdress/${dress.id}`;
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row-reverse', flex: '1 0 33%', maxWidth: 345 }} onClick={handleCardClick}>
      <CardActionArea>
        <CardContent sx={{ textAlign: 'right' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right' }}>
            <img src={image} alt="Profile Image" style={{ width: '250px', height: '350px' }} />

            <br />
            <span style={{ fontWeight: 'bold', color: 'darkblue' }}>תיאור: {dress.describe}</span>
            <br />
            <span style={{ fontWeight: 'bold', color: 'darkblue' }}>מחיר: {dress.price}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
