import { IIdeaType } from "./idea-type";
/**
   * The idea interface for ideas.
   * 
   * @param ideaName - Name of the idea.
   * @param icons - Icons for the idea. Typically 5.
   * @param description - Short phrase for the idea.
   * @param ideaType - Type of the idea used for colors.
   */
export interface IIdea {
    ideaName: string;
    icons: any[];
    description: string;
    ideaType: IIdeaType;
}
