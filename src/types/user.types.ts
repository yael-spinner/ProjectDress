
import { DressType } from "./dress.type";

export type UserType = {
    name: string;
    password: string
}

export type AuthUserType = {
    token: string,
    user: UserType,
    // isAuthenticated: boolean, 
    // isInitialized: boolean 
};
