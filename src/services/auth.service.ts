import axios from "../utils/axios";
export const login = async (name: string, password: string) => {
    const response = await axios.post<string>('/Login', {"name": name,"password": password })
    return {
        token: response.data,
        user: {
            name,
            password,
        }
    }
};