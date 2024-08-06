import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField } from '@mui/material';
import { DressType } from '../types/dress.type';
import { RentToAnyoneType } from '../types/rentToAnyone.type';
import { ResponseType } from '../types/response.type';
import { getRentToAnyoneById } from '../services/rentToAnyone.service';
import { getDressById } from '../services/dress.service';
import { useDispatch, useSelector } from 'react-redux';
import { selectRent } from '../redux/rent/rent.selectors';
import { AddRentalse } from '../services/rentals.service';
import { differenceInDays, isValid } from 'date-fns';
import { useParams } from 'react-router-dom';
import { Color } from '../types/Color';
import { ShortOrLong } from '../types/ShortOrLong';
import { Season } from '../types/Season';
import {AddResponse} from '../services/response.service'
import { useAppSelector } from '../redux/store';
export default function ShowDress() {
    const [rentToAnyOne, setRentToAnyOne] = useState<RentToAnyoneType | null>(null);
    const [dress, setDress] = useState<DressType>();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [newResponse, setNewResponse] = useState<string>('');
    const user = useAppSelector(selectRent);
    const { param } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedDress: DressType = await getDressById(param ? parseInt(param) : 1); // Replace with your logic to fetch dress
                setDress(fetchedDress);
                const fetchedRentToAnyOne = await getRentToAnyoneById(fetchedDress.rentToAnyoneid); // Assuming rentToAnyoneid is available in dress
                setRentToAnyOne(fetchedRentToAnyOne);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const imageSrc = dress?.urlImage ? require(`../images/${dress.urlImage}`) : null;

    const handleButtonClick = async () => {
        try {
            if (startDate && endDate && dress && user && isValid(startDate) && isValid(endDate)) {
                const respons = await AddRentalse(startDate, endDate, dress.id, 1);
                alert(respons);
            } else {
                console.error('One of the required values is null or undefined, or dates are invalid.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const AddRes = async () => {
        console.log("AddResponse")
        try {
            await AddResponse(newResponse,new Date(),dress?dress.id:0);
        } catch (error) {
            console.log(error);
        }
    }
    const handleAddResponse = () => {
        if (newResponse && dress) {
            const newResponseObject: ResponseType = {
                id: Date.now(),
                description: newResponse,
                dateTime: new Date(),
                dressId: dress.id
            };
            AddRes();
            setDress((prevDress) => prevDress ? { ...prevDress, response: [...prevDress.response, newResponseObject] } : prevDress);
            setNewResponse('');
        }
    };

    return (
        <div style={{ paddingBottom: '180px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', height: '100%', paddingTop: '20px' }}>
                <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CardContent sx={{ flex: '1', textAlign: 'right' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'right' }}>
                            <div style={{ whiteSpace: 'nowrap', color: 'darkblue' }}>
                                <div><b>תיאור:</b> {dress?.describe}</div>
                                <div><b>מחיר:</b> {dress?.price}</div>
                                <div><b>צבע:</b> {dress ? Color[dress.color] : ''}</div>
                                <div><b>אורך:</b> {dress ? ShortOrLong[dress.shortOrLong] : ''}</div>
                                <div><b>עונה:</b> {dress ? Season[dress.season] : ''}</div>
                                <div><b>מידה:</b> {dress?.size}</div>
                                <div><b>שם המפרסם:</b> {rentToAnyOne ? rentToAnyOne.name : 'אין שם'}</div>
                            </div>
                        </Typography>
                        <Box>
                            <Box>
                                <p style={{ fontWeight: 'bold', color: 'darkblue' }}>? ממתי להשכיר</p>
                                <input
                                    id="startDate"
                                    type="date"
                                    style={{ width: '200px', height: '40px', fontSize: 'large', fontWeight: 'bold' }}
                                    value={startDate ? startDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setStartDate(isValid(new Date(e.target.value)) ? new Date(e.target.value) : null)}
                                />
                            </Box>
                            <Box>
                                <p style={{ fontWeight: 'bold', color: 'darkblue' }}>? עד מתי להשכיר</p>
                                <input
                                    id="endDate"
                                    type="date"
                                    style={{ width: '200px', height: '40px', fontSize: 'large', fontWeight: 'bold' }}
                                    value={endDate ? endDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => setEndDate(isValid(new Date(e.target.value)) ? new Date(e.target.value) : null)}
                                />
                            </Box>
                        </Box>
                        <br />
                        <Button variant="contained" size="large" onClick={handleButtonClick}>אני רוצה לשכור</Button>
                    </CardContent>
                    <img src={imageSrc} alt="תמונה" style={{ width: '400px', height: '500px', objectFit: 'cover', alignSelf: 'flex-start' }} />
                </Box>
            </Box>
            <Box sx={{ flex: 1, width: '50%', textAlign: 'right' ,marginLeft:"48%",paddingRight:"2%"}}>
                <Typography variant="h6" component="div" sx={{ marginBottom: '10px', color: 'darkblue' }}>
                    <h1 style={{ fontWeight: 'bold', color: 'darkblue' }}>תגובות</h1>
                </Typography>
                <Box>
                    {dress?.response.map((response) => {
                        const responseDate = new Date(response.dateTime);
                        return (
                            <Box key={response.id} sx={{ textAlign: 'right', border: '1px solid darkblue', padding: '7px', marginBottom: '10px' }}>
                                <Typography sx={{ color: 'darkblue' }}><b>תאריך:</b> {responseDate.toLocaleDateString()}</Typography>
                                <Typography sx={{ color: 'darkblue' }}><b>תיאור:</b> {response.description}</Typography>
                            </Box>
                        );
                    })}
                </Box>
                <br />
                <TextField
                    label="הוסף תגובה"
                    variant="outlined"
                    value={newResponse}
                    onChange={(e) => setNewResponse(e.target.value)}
                    sx={{ marginBottom: '10px' }}
                />
                <br />
                <Button variant="contained" size="large" onClick={handleAddResponse}>הוסף תגובה</Button>
            </Box>
        </div>
    );
}
