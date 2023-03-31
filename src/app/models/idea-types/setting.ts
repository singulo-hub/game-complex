import {IIdeaType} from '../idea-type';

export class SettingType implements IIdeaType {
    typeName: string = 'Settings';
    description: string = 'What type of universe the game resides in.';
    backgroundColor: string = '#0C4CA1';
    iconColor: string = '#6fe6f3';
}
