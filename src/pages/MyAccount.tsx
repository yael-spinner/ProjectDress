import { useDispatch, useSelector } from 'react-redux';
import { selectRent } from '../redux/rent/rent.selectors';
import { LinearProgress } from '@mui/material';
import { RentalsType } from '../types/rentalse.type';
import RentalCard from './RentalCard';
import { setRentalsSlice } from '../redux/rentals/rentals.slice';
import { selectRentals } from '../redux/rentals/rentals.selectors';
export default function MyAccount() {
    const user = useSelector(selectRent);
    const rentals:RentalsType[] = useSelector(selectRentals);
    console.log("myAccount")
    console.log(user)
    console.log(rentals)
 
    // const dispatch = useDispatch();
    // dispatch(setRentalsSlice(user.rentals));
    
    return <>
        <h1 style={{ textAlign: 'center', width: 'bold' }}>השמלות שהשכרת</h1>
        <div style={{ paddingLeft: '20px', paddingBottom: '120px' }}
        >
            {rentals ? (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    {rentals.map((rental, index) => (
                        <div key={rental.id} >
                            <RentalCard key={rental.id} rentals={rental} />
                        </div>
                    ))}
                </div>
            )
                : (
                    <LinearProgress />
                )}
        </div>
    </>
}

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { LinearProgress } from '@mui/material';
// import { selectRent } from '../redux/rent/rent.selectors';
// import { selectRentals } from '../redux/rentals/rentals.selectors';
// import { getUserRentByNameAndPassword } from '../services/rentUser.service';
// import RentalCard from './RentalCard';
// import { setRentalsSlice } from '../redux/rentals/rentals.slice';

// export default function MyAccount() {
//     const dispatch = useDispatch();
//     const user = useSelector(selectRent);
//     const { rentals } = useSelector(selectRentals);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const rentUser = await getUserRentByNameAndPassword(user.name, user.password);
//                 dispatch(setRentalsSlice(rentUser.rentals));
//             } catch (error) {
//                 console.error('Error fetching user rentals:', error);
//             }
//         }
        
//         fetchData();
//     }, [dispatch, user.name, user.password]);

//     return (
//         <>
//             <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>השמלות שהשכרת</h1>
//             <div style={{ paddingLeft: '20px', paddingBottom: '120px' }}>
//                 {rentals ? (
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
//                         {rentals.map(rental => (
//                             <div key={rental.id}>
//                                 <RentalCard rentals={rental} />
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <LinearProgress />
//                 )}
//             </div>
//         </>
//     );
// }
