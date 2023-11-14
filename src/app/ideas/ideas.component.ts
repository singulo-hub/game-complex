import { Component, Input, OnInit } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { Observable } from 'rxjs';
import { IdeaService } from '../idea.service';
import { goalType } from '../data/placeholder-idea';
import { IIdea } from '../models/idea';
import { IIdeaType } from '../models/idea-type';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.less']
})
export class IdeasComponent implements OnInit {
  @Input() ideaType: IIdeaType = goalType;
  @Input() amount: number = 1;
  @Input() randomizeEvent: Observable<void> | undefined;

  ideas: IIdea[] = [];
  activeIdeas: IIdea[] = [];
  lockedIdeas: boolean[] = [];

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.randomizeEvent?.subscribe(() => this.randomizeAll());

    if (this.ideaType) {
      this.ideaService.getIdeas(this.ideaType.typeName).subscribe(ideas => {
        this.ideas = ideas;
        console.log(this.ideas);
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
      this.lockedIdeas[index] = false;
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
  
  lockIdea(index: number) {
    this.lockedIdeas[index] = !this.lockedIdeas[index];
  }

  randomizeAll() {
    this.ideas = arrayShuffle(this.ideas);
    for (let index = 0; index < this.activeIdeas.length; index++) {
      if (!this.lockedIdeas[index]) {
        this.dropIdea(index);
      }
    }
  }
}