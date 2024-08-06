import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DressType } from '../../types/dress.type'

const dressSlice = createSlice({
  name: 'dress',
  initialState: { dresses: [] as DressType[] },
  reducers: {
    addDressSlice: (state, action: PayloadAction<DressType>) => {
      state.dresses.push(action.payload)
    },
    setDressSlice: (state, action: PayloadAction<DressType[]>) => {
      state.dresses = action.payload;
    },
    updateDressSlice: (state, action: PayloadAction<DressType>) => {
      const index = state.dresses.findIndex(dress => action.payload.id);
      state.dresses[index] = action.payload;
    },
    deleteDressSlice: (state, action: PayloadAction<number>) => {
      state.dresses = state.dresses.filter(c => c.id != action.payload);
    },
  }
})

export const { setDressSlice, addDressSlice, updateDressSlice, deleteDressSlice } = dressSlice.actions

export default dressSlice.reducer

