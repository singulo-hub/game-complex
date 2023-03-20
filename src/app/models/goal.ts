import {ICardType} from './card-type';

export class Goal implements ICardType {
    typeName: string = 'Goal';
    description: string = 'Ultimate task for the player to achieve.';
    backgroundColor: string = '#8D360F';
    iconColor: string = '#f3b25e';
}
