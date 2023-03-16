import {ICardType} from './card-type';

export class Theme implements ICardType {
    name: string = 'Theme';
    description: string = 'The central topics, subjects, or messages of the game.';
    backgroundColor: string = '#96C591';
    iconColor: string = '#0B5135';
}
