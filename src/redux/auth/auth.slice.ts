import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { UserType } from "../../types/user.types";
import { removeSession } from "../../auth/utils";
type AuthStateType = {
    user: UserType | null,
    isAuthenticated: boolean,  // או מחובר או לא מחובר 
    isInitialized: boolean //  ( אם כבר בדק אם אני מחובר או לא)   אם קרה אתחול
}
const initialState: AuthStateType = {
    user: null,
    isAuthenticated: false,
    isInitialized: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: AuthStateType, action: PayloadAction<UserType>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isInitialized = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isInitialized = false;
            removeSession();
        },
        setInitialized: (state: AuthStateType) => {
            state.isInitialized = true;
        }
    }
})
export const { setUser, setInitialized ,clearUser} = authSlice.actions

export default authSlice.reducer


// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { UserType } from "../../types/user.types";
// import { removeSession } from "../../auth/utils";
// import { RentUserType } from "../../types/rentUser";
// import { getUserRentByNameAndPassword } from "../../services/rentUser.service";
// import { addRentSlice } from "../rent/rent.slice";
// import { setRentalsSlice } from "../rentals/rentals.slice";

// type AuthStateType = {
//     user: UserType | null,
//     isAuthenticated: boolean,
//     isInitialized: boolean
// }

// const initialState: AuthStateType = {
//     user: null,
//     isAuthenticated: false,
//     isInitialized: false
// }

// const setRent = async (name: string, password: string, dispatch: any) => {
//     try {
//         const rentUser: RentUserType = await getUserRentByNameAndPassword(name, password);
//         console.log('אחרי קריאת למצוא את המשתמש');
//         console.log(rentUser);
//         dispatch(addRentSlice(rentUser));
//         dispatch(setRentalsSlice(rentUser.rentals));
//     } catch (error) {
//         throw new Error('Login failed');
//     }
// }
// export const asyncSetUser = (user: UserType) => async (dispatch: any) => {
//     await setRent(user.name, user.password, dispatch);
// }
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setUser: (state: AuthStateType, action: PayloadAction<UserType>) => {
//             state.user = action.payload;
//             state.isAuthenticated = true;
//             state.isInitialized = true;
//             asyncSetUser(action.payload);
//         },
//         clearUser: (state) => {
//             state.user = null;
//             state.isAuthenticated = false;
//             state.isInitialized = false;
//             removeSession();
//         },
//         setInitialized: (state: AuthStateType) => {
//             state.isInitialized = true;
//         }
//     }
// });

// export const { setUser, setInitialized, clearUser } = authSlice.actions;
// export default authSlice.reducer;
