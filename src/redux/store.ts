import { configureStore } from '@reduxjs/toolkit'
import dressReducer from './dress/dress.slice'
import rentReducer from './rent/rent.slice'
import rentalsReducer from './rentals/rentals.slice'
import rentToAnyoneReducer from './rentToAnyone/rentToAnyone.slice'
import responseReducer from './response/response.slice'
import authReducer from './auth/auth.slice'
import { useSelector,TypedUseSelectorHook } from 'react-redux'
export const store = configureStore({
    reducer: {
        dress: dressReducer,
        rent: rentReducer,
        rentals: rentalsReducer,
        rentToAnyone: rentToAnyoneReducer,
        response: responseReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector