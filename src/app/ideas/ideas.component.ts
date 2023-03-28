import { Component, Input, OnInit } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { IdeaService } from '../idea.service';
import { IIdea } from '../models/idea';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.less']
})
export class IdeasComponent implements OnInit {
  @Input()
  ideaType: string = 'Goal';
  @Input()
  amount: number = 1;
  
  ideas: IIdea[] = [];
  activeIdeas: IIdea[] = [];

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getIdeas(this.ideaType).subscribe(ideas => {
      this.ideas = ideas;
      if (this.ideas.length > 0) {
        this.ideas = arrayShuffle(this.ideas);
        for (let index = 0; index < this.amount; index++) {
          this.drawCard();
        }
      }
    });
  }

  drawCard() {
    let newCard = this.ideas.pop();
    if (newCard) {
      this.activeIdeas.push(newCard);
    }
  }

  discardIdea(index: number) {
    let oldIdea = this.activeIdeas.at(index);
    if (oldIdea) {
      // Put the card at the bottom of the deck
      this.ideas.splice(0, 0, oldIdea);
      delete this.activeIdeas[index];
    }
  }
}