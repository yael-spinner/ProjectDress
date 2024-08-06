import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RentUserType } from '../../types/rentUser';
// const initialState: RentUserType = {
//   id: 0,
//   name: "",
//   rentals: [],
//   password: ""
// }
interface InitialState {
  user: RentUserType;
}

const initialState: InitialState = {
  user: {id:0,name:"",rentals:[],password:""},
};

const rentSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    // setRentSlice: (state:RentUserType, action: PayloadAction<RentUserType>) => {
    //   state.id = action.payload.id;
    //   state.name = action.payload.name;
    //   state.password = action.payload.password;
    //   state.rentals = action.payload.rentals;

    // },
    addRentSlice: (state, action: PayloadAction<RentUserType>) => {
      // state.id = action.payload.id;
      // state.name = action.payload.name;
      // state.password = action.payload.password;
      // state.rentals = action.payload.rentals;
      state.user = action.payload;

    },
    clearRentUser: (state) => {
      // state.id = 0;
      // state.name = "";
      // state.password = "";
      // state.rentals = [];
      state.user={id:0,name:"",rentals:[],password:""}
  },
    // updateRentSlice: (state, action: PayloadAction<RentUserType>) => {
    //   const index = state.rentes.findIndex(rentes => action.payload.id);
    //   state.rentes[index] = action.payload;
    // },
    // deleteRentSlice: (state, action: PayloadAction<number>) => {
    //   state.rentes.splice(action.payload, 1);
    // }
  }
})

export const { addRentSlice,clearRentUser } = rentSlice.actions

export default rentSlice.reducer
