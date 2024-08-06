import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RentalsType } from '../../types/rentalse.type';
const rentalsSlice = createSlice({
  name: 'rentals',
  initialState: { rentals: [] as RentalsType[] },
  reducers: {
    setRentalsSlice: (state, action: PayloadAction<RentalsType[]>) => {
      state.rentals = action.payload;
    },
    addRentalsSlice: (state, action: PayloadAction<RentalsType>) => {
      state.rentals.push(action.payload)
    },
    updateRentalsSlice: (state, action: PayloadAction<RentalsType>) => {
      const index = state.rentals.findIndex(dress => action.payload.id);
      state.rentals[index] = action.payload;
    },
    deleteRentalsSlice: (state, action: PayloadAction<number>) => {
      state.rentals.splice(action.payload, 1);
    }
  }
})

export const { setRentalsSlice, addRentalsSlice, updateRentalsSlice, deleteRentalsSlice } = rentalsSlice.actions

export default rentalsSlice.reducer
