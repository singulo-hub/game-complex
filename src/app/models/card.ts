import { ICardType } from "./card-type";

export interface ICard {
    cardName: string;
    icons: any[];
    description: string;
    cardType: ICardType;
}
