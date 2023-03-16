import { ICardType } from "./card-type";

export interface ICard {
    name: string;
    icons: any[];
    description: string;
    cardType: ICardType;
}
