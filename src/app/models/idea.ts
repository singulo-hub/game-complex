import { IIdeaType } from "./idea-type";

export interface IIdea {
    ideaName: string;
    icons: any[];
    description: string;
    ideaType: IIdeaType;
}
