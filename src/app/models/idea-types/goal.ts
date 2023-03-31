import {IIdeaType} from '../idea-type';

export class GoalType implements IIdeaType {
    typeName: string = 'Goals';
    description: string = 'Ultimate task for the player to achieve.';
    backgroundColor: string = '#8D360F';
    iconColor: string = '#f3b25e';
}
