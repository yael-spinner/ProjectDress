// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { RentalsType } from '../types/rentalse.type';
// import { getDressById } from '../services/dress.service';
// import DressCard from './DressCard';
// import { DressType } from '../types/dress.type';

// type Props = {
//     rentals: RentalsType
// }

// export default function RentalCard({ rentals }: Props) {
//     console.log(rentals)
//     const [dress, setDress] = useState<DressType>({
//         id: 0,
//         size: 0,
//         color: 0,
//         describe: '',
//         shortOrLong: 0,
//         season: 0,
//         price: '',
//         urlImage: '',
//         response: [],
//         rentalse: [],
//         rentToAnyoneid: 0,
//     });


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const dressData: DressType = await getDressById(rentals.dressId);
//                 setDress(dressData);
//             } catch (error) {
//                 console.error('Error fetching dress:', error);
//             }
//         };

//         fetchData();
//     }, [rentals.dressId]);
//     //
//      return (
//         <div>     
//             <DressCard dress={dress} /> 
//              {/* <div>
//                 השכרה מתאריך : {rentals.dateTimeRent.getDay()} עד תאריך : {rentals.lastDateTimeToRetern.getDay()}
//             </div> */}
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import DressCard from './DressCard';
import { RentalsType } from '../types/rentalse.type';
import { DressType } from '../types/dress.type';
import { getDressById } from '../services/dress.service';
import { LinearProgress } from '@mui/material';

type Props = {
    rentals: RentalsType;
};

export default function RentalCard({ rentals }: Props) {
    const [dress, setDress] = useState<DressType | null>(null);

    useEffect(() => {
        const fetchDress = async () => {
            try {
                const fetchedDress: DressType = await getDressById(rentals.dressId);
                setDress(fetchedDress);
            } catch (error) {
                console.error('Error fetching dress:', error);
            }
        };

        fetchDress();
    }, [rentals.dressId]);

    return (
        <div style={{ textAlign: 'right', border: '1px, solid, darkBlue', padding: '7px' }}>
            <br />
            <div style={{ color: 'darkblue', fontSize: 'large' }}>השכרת מתאריך : {rentals.dateTimeRent.toString().slice(0, 10)}</div>
            <div style={{ color: 'darkblue', fontSize: 'large' }}>עד תאריך : {rentals.lastDateTimeToRetern.toString().slice(0, 10)}</div>
            <br />
            {dress ? (
                <DressCard dress={dress} />
            ) : (
                <LinearProgress />
            )}
        </div>
    );
}
