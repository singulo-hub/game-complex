import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { Observable } from 'rxjs';
import { IdeaService } from '../idea.service';
import { goalType } from '../data/placeholder-idea';
import { IIdea } from '../models/idea';
import { IIdeaType } from '../models/idea-type';

@Component({
    selector: 'ideas',
    templateUrl: './ideas.component.html',
    styleUrls: ['./ideas.component.less'],
    standalone: false
})
export class IdeasComponent implements OnInit, AfterViewInit {
  @Input() ideaType: IIdeaType = goalType;
  @Input() amount: number = 1;
  @Input() randomizeEvent: Observable<void> | undefined;

  @ViewChild('randomizeButton') randomizeButton: ElementRef | undefined;
  
  ideas: IIdea[] = [];
  activeIdeas: IIdea[] = [];
  lockedIdeas: boolean[] = [];
  randomizeButtonSrc: string = "";
  constructor(private ideaService: IdeaService) {}

  ngAfterViewInit(): void {
    switch (this.ideaType.typeName) {
      case 'Themes':
        this.randomizeButton?.nativeElement.classList.add('theme-filter');
        this.randomizeButtonSrc = "assets/game-icons.net/lorc/light-bulb.svg";
        break;
      case 'Goals':
        this.randomizeButton?.nativeElement.classList.add('goal-filter');
        this.randomizeButtonSrc = "assets/game-icons.net/delapouite/stairs-goal.svg";
        break;
      case 'Settings':
        this.randomizeButton?.nativeElement.classList.add('setting-filter');
        this.randomizeButtonSrc = "assets/game-icons.net/delapouite/horizon-road.svg";
        break;
      case 'Wildcards':
        this.randomizeButton?.nativeElement.classList.add('wildcard-filter');
        this.randomizeButtonSrc = "assets/game-icons.net/faithtoken/card-random.svg";
        break;
    }
  }

  ngOnInit(): void {
    this.randomizeEvent?.subscribe(() => this.randomizeAll());

    if (this.ideaType) {
      this.ideaService.getIdeas(this.ideaType.typeName).subscribe(ideas => {
        this.ideas = ideas;
        //console.debug(this.ideaType);
        //console.debug(this.ideas);
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
  
  dropIdeas() {
    for (let index = 0; index < this.activeIdeas.length; index++) {
      if (!this.lockedIdeas[index]) {
      this.dropIdea(index);
      }
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