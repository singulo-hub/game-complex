import {IIdeaType} from './idea-type';

export class Wildcard implements IIdeaType {
    typeName: string = 'Wildcard';
    description: string = 'Interesting twists or gimicks to spice up the game.';
    backgroundColor: string = '#0B5135';
    iconColor: string = '#96C591';
}
