import { IIdea } from '../models/idea';
import { GoalType } from '../models/idea-types/goal';

export let goalType = new GoalType();

export const IDEA: IIdea =
{
    ideaName: 'Placeholder',
    icons: ['/lorc/uncertainty.svg'],
    description: 'You should probably change this.',
    ideaType: goalType
};
