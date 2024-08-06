import { RentUserType } from "../types/rentUser";
import axios from "../utils/axios";
export const getUserRentById = async (id: number): Promise<RentUserType> => {
    const respons = await axios.get(`/Rent/${id}`)
    return respons.data
};
export const getUserRentByNameAndPassword = async (name:string,password:string): Promise<RentUserType> => {
    const respons = await axios.get(`/Rent/${name}/${password}`)
    return respons.data
};

export const AddUserRent = async (userFirstName: string, userLastName: string, password: string): Promise<RentUserType>  => {
    const response = await axios.post('/Rent', { "name": userFirstName +" "+ userLastName, "password": password,rentals:[] })
    return response.data;
};
export const updateUserRent = async (RentToUpdate: RentUserType, id: number) => {
    const respons = await axios.put(`/Rent/${id}`, RentToUpdate)
    return respons.data
}
export const deleteUserRent = async (id: number) => {
    const respons = await axios.delete(`/Rent/${id}`)
    return respons.data
}
