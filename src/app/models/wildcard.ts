import {ICardType} from './card-type';

export class Wildcard implements ICardType {
    name: string = 'Wildcard';
    description: string = 'Interesting twists or gimicks to spice up the game.';
    backgroundColor: string = '#B5739E';
    iconColor: string = '#642F82';
}
