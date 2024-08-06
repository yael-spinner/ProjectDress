import { DressType } from "./dress.type";
import { RentalsType } from "./rentalse.type";

export type RentUserType = {
    id: number;
    name: string;
    rentals: RentalsType[];
    password: string
}