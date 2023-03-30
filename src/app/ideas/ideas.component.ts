import { Component, Input, OnInit } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { IdeaService } from '../idea.service';
import { goal } from '../mock-ideas';
import { IIdea } from '../models/idea';
import { IIdeaType } from '../models/idea-type';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.less']
})
export class IdeasComponent implements OnInit {
  @Input()
  ideaType: IIdeaType = goal;
  @Input()
  amount: number = 1;

  ideas: IIdea[] = [];
  activeIdeas: IIdea[] = [];

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    if (this.ideaType) {
      this.ideaService.getIdeas(this.ideaType.typeName).subscribe(ideas => {
        this.ideas = ideas;
        if (this.ideas.length > 0) {
          this.ideas = arrayShuffle(this.ideas);
          for (let index = 0; index < this.amount; index++) {
            this.getIdea(index);
          }
        }
      });
    }
  }
  
  getIdea(index: number) {
    let newCard = this.ideas.pop();
    if (newCard) {
      this.activeIdeas[index] = newCard;
    }
  }

  dropIdea(index: number) {
    let oldIdea = this.activeIdeas.at(index);
    if (oldIdea) {
      // Put the card at the bottom of the deck
      this.ideas.unshift(oldIdea);
      this.getIdea(index);
    }
  }
}