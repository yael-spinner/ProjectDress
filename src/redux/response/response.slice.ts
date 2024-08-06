import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ResponseType } from '../../types/response.type';
const ResponseSlice = createSlice({
  name: 'response',
  initialState: { responses: [] as ResponseType[] },
  reducers: {
    setResponseSlice: (state, action: PayloadAction<ResponseType[]>) => {
      state.responses = action.payload;
    },
    addResponseSlice: (state, action: PayloadAction<ResponseType>) => {
      state.responses.push(action.payload)
    },
    updateResponseSlice: (state, action: PayloadAction<ResponseType>) => {
      const index = state.responses.findIndex(dress => action.payload.id);
      state.responses[index] = action.payload;
    },
    deleteResponseSlice: (state, action: PayloadAction<number>) => {
      state.responses.splice(action.payload, 1);
    }
  }
})

export const { setResponseSlice, addResponseSlice, updateResponseSlice, deleteResponseSlice } = ResponseSlice.actions

export default ResponseSlice.reducer
