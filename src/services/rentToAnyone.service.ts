import { RentToAnyoneType } from "../types/rentToAnyone.type";
import axios from "../utils/axios";
export const getRentToAnyoneById = async (id: number): Promise<RentToAnyoneType> => {
    const respons = await axios.get(`/RentToAnyone/${id}`)
    return respons.data
};

export const deleteRentToAnyone = async (id: number) => {
    const respons = await axios.delete(`/RentToAnyone/${id}`)
    return respons.data
}
export const AddRentToAnyone = async (name: string, city: string, phon: string, email: string):Promise<RentToAnyoneType> => {
    const respons = await axios.post(`/RentToAnyone`, { "name": name, "city": city,"phon":phon,"email":email })
    return respons.data

}