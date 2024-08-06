import { RentalsType } from "../types/rentalse.type";
import axios from "../utils/axios";
export const getAllRentalse = async (): Promise<RentalsType[]> => {
    const respons = await axios.get(`/Rentals`)
    return respons.data
};

export const AddRentalse = async (dateTimeRent: Date, lastDateTimeToRetern: Date, dressId: number, rentId: number) => {
    console.log("AddRentalse",dateTimeRent,lastDateTimeToRetern,dressId,rentId)
     const respons =await axios.post(`/Rentals`, { "dateTimeRent": dateTimeRent, "lastDateTimeToRetern": lastDateTimeToRetern, "dressId": dressId, "rentId": rentId })
    return respons.data
}
export const updateRentalse = async (RentalseToUpdate: RentalsType, id: number) => {
    const respons = await axios.put(`/Rentals/${id}`, RentalseToUpdate)
    return respons.data
}
export const deleteRentalse = async (id: number) => {
    const respons = await axios.delete(`/Rentals/${id}`)
    return respons.data
}
