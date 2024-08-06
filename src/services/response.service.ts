import { ResponseType } from "../types/response.type";
import axios from "../utils/axios";

export const AddResponse = async (description: string, dateTime:Date,dressId: number)  => {
    await axios.post('/Response', { "id": 0 ,"description": description,"dateTime": dateTime,"dressId": dressId})
};
