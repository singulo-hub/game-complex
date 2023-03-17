import {ICardType} from './card-type';

export class Setting implements ICardType {
    typeName: string = 'Setting';
    description: string = 'What type of universe the game resides in.';
    backgroundColor: string = '#DFBC8C';
    iconColor: string = '#8D360F';
}
