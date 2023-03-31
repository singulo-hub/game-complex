import {IIdeaType} from '../idea-type';

export class ThemeType implements IIdeaType {
    typeName: string = 'Themes';
    description: string = 'The central topics, subjects, or messages of the game.';
    backgroundColor: string = '#642F82';
    iconColor: string = '#f59cdf';
}
