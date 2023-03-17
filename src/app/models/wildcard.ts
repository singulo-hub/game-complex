import {ICardType} from './card-type';

export class Wildcard implements ICardType {
    typeName: string = 'Wildcard';
    description: string = 'Interesting twists or gimicks to spice up the game.';
    backgroundColor: string = '#0B5135';
    iconColor: string = '#96C591';
}
