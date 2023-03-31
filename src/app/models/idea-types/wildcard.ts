import {IIdeaType} from '../idea-type';

export class WildcardType implements IIdeaType {
    typeName: string = 'Wildcards';
    description: string = 'Interesting twists or gimicks to spice up the game.';
    backgroundColor: string = '#0B5135';
    iconColor: string = '#abd59b';
}
