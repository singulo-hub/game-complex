import {ICardType} from './card-type';

export class Setting implements ICardType {
    typeName: string = 'Setting';
    description: string = 'What type of universe the game resides in.';
    backgroundColor: string = '#0C4CA1';
    iconColor: string = '#6fe6f3';
}
