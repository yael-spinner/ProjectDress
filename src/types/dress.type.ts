import { Color } from "./Color";
import { RentalsType } from "./rentalse.type";
import { ResponseType } from "./response.type";
import { Season } from "./Season";
import { ShortOrLong } from "./ShortOrLong";

export type DressType = {
    id: number;
    size: number;
    color: Color;
    describe: string;
    shortOrLong: ShortOrLong;
    season: Season;
    price: number;
    urlImage: string;
    ProfileImage: File; 
    rentToAnyoneid: number;
    response: ResponseType[];
};
