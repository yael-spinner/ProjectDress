
// import { Color } from "../types/Color";
// import { Season } from "../types/Season";
// import { ShortOrLong } from "../types/ShortOrLong";
// import { DressType } from "../types/dress.type";
// import axios from "../utils/axios";
// export const getDressById = async (id: number): Promise<DressType> => {
//     const respons = await axios.get(`/Dress/${id}`)
//     return respons.data
// };
// export const getDressByName = async (name: string): Promise<DressType> => {
//     const respons = await axios.get(`/Dress/name/${name}`)
//     return respons.data
// };
// export const getDressByPhon = async (phone: string): Promise<DressType> => {
//     const respons = await axios.get(`/Dress/phone/${phone}`)
//     return respons.data
// };
// export const getAllDress = async (): Promise<DressType[]> => {
//     const respons = await axios.get(`/Dress`)
//     return respons.data
// };
// // export const AddDress = async (size: number, color: number, describe: string, shortOrLong: number, season: number, price: string, urlImage: string, rentToAnyoneid: number) => {
// //     await axios.post(`/Dress`, { "id": 0, "size": 18, "color": 1, "describe": describe, "shortOrLong": 1, "season": 1, "price": price, "urlImage": urlImage, "rentToAnyoneid": rentToAnyoneid, "response":[
// //         {
// //           "id": 0,
// //           "dressId": 0,
// //           "description": "string",
// //           "dateTime": "2024-06-27T14:57:53.399Z"
// //         }
// //       ] })
// // }
// // const getNumericColor = (color: keyof typeof Color): number => {
// //     return Color[color];
// //   }
// export const AddDress = async (size: number, color: number, describe: string, shortOrLong: number, season: number, price: string, urlImage: string, rentToAnyoneid: number) => {
//     console.log('Color:', color, typeof color);
//     console.log('Short or Long:', shortOrLong, typeof shortOrLong);
//     console.log('Season:', season, typeof season);    await axios.post(`/Dress`,
//         {
//             "id": 0,
//             "size": size,
//             "color": 0,
//             "describe": describe,
//             "shortOrLong": 0,
//             "season": 0,
//             "price": price,
//             "urlImage": "image1.png",
//             "rentToAnyoneid": rentToAnyoneid,
//             "response": [
//                 {
//                     "id": 0,
//                     "dressId": 0,
//                     "description": "string",
//                     "dateTime": "2024-06-27T16:24:14.739Z"
//                 }
//             ]
//         }
//     )
// }
// export const updateDress = async (DressToUpdate: DressType, id: number) => {
//     const respons = await axios.put(`/Dress/${id}`, DressToUpdate)
//     return respons.data
// }
// export const deleteDress = async (id: number) => {
//     const respons = await axios.delete(`/Dress/${id}`)
//     return respons.data
// }

import { Color } from "../types/Color";
import { Season } from "../types/Season";
import { ShortOrLong } from "../types/ShortOrLong";
import { DressType } from "../types/dress.type";
import axios from "../utils/axios";

export const getDressById = async (id: number): Promise<DressType> => {
    const respons = await axios.get(`/Dress/${id}`);
    return respons.data;
};

export const getDressByName = async (name: string): Promise<DressType> => {
    const respons = await axios.get(`/Dress/name/${name}`);
    return respons.data;
};

export const getDressByPhon = async (phone: string): Promise<DressType> => {
    const respons = await axios.get(`/Dress/phone/${phone}`);
    return respons.data;
};

export const getAllDress = async (): Promise<DressType[]> => {
    const respons = await axios.get(`/Dress`);
    return respons.data;
};

export const AddDress = async (size: number, color: number, describe: string, shortOrLong: number, season: number, price: number, ProfileImage: File, rentToAnyoneid: number): Promise<DressType> => {
    const newDress = new FormData();
    newDress.append('id', "0");
    console.log(size)
    newDress.append('size', size.toString());
    console.log(color)
    newDress.append('color', color.toString());
    newDress.append('describe', describe);
    console.log(shortOrLong)
    newDress.append('shortOrLong', shortOrLong.toString());
    console.log(season)
    newDress.append('season', season.toString());
    console.log(price)
    newDress.append('price', price.toString()); 
    newDress.append('urlImage', "default-url");
    newDress.append('ProfileImage', ProfileImage);
    console.log(rentToAnyoneid)
    newDress.append('rentToAnyoneid', rentToAnyoneid.toString());

    let responseArray = [
        {
            id: 0,
            dressId: 0,
            description: "string",
            dateTime: "2024-07-02T14:03:21.275Z"
        }
    ];
    newDress.append("response", JSON.stringify(responseArray));

    try {
        const response = await axios.post(`/Dress`, newDress, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // מחזיר את הנתונים מהתגובה
    } catch (error) {
        throw error; // זורק את השגיאה לטיפול חיצוני
    }
};

export const updateDress = async (DressToUpdate: DressType, id: number) => {
    const respons = await axios.put(`/Dress/${id}`, DressToUpdate);
    return respons.data;
};

export const deleteDress = async (id: number) => {
    const respons = await axios.delete(`/Dress/${id}`);
    return respons.data;
}
