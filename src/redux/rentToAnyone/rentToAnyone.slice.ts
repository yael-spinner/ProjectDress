import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RentToAnyoneType } from '../../types/rentToAnyone.type';
const RentsToAnyOneSlice = createSlice({
  name: 'rent_to_any_one',
  initialState: { rents_to_any_one: [] as RentToAnyoneType[] },
  reducers: {
    setRentsToAnyOneSlice: (state, action: PayloadAction<RentToAnyoneType[]>) => {
      state.rents_to_any_one= action.payload;
    },
    addRentsToAnyOneSlice: (state, action: PayloadAction<RentToAnyoneType>) => {
      state.rents_to_any_one.push(action.payload)
    },
    updateRentsToAnyOneSlice: (state, action: PayloadAction<RentToAnyoneType>) => {
      const index = state.rents_to_any_one.findIndex(dress => action.payload.id);
      state.rents_to_any_one[index] = action.payload;
    },
    deleteRentsToAnyOneSlice: (state, action: PayloadAction<number>) => {
      state.rents_to_any_one.splice(action.payload, 1);
    }
  }
})

export const { setRentsToAnyOneSlice, addRentsToAnyOneSlice, updateRentsToAnyOneSlice, deleteRentsToAnyOneSlice } = RentsToAnyOneSlice.actions

export default RentsToAnyOneSlice.reducer
