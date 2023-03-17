import {ICardType} from './card-type';

export class Goal implements ICardType {
    typeName: string = 'Goal';
    description: string = 'Ultimate task for the player to achieve.';
    backgroundColor: string = '#55AFC3';
    iconColor: string = '#0C4CA1';
}
