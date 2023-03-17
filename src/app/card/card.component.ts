import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CARD } from '../mock-cards';
import { ICard } from '../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements AfterViewInit{
  @Input()
  card: ICard = CARD;

  constructor(private elementRef: ElementRef) {}

  @ViewChild('icon1') icon1: ElementRef | undefined;
  @ViewChild('icon2') icon2: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.icon1?.nativeElement.classList.add('fade-out');
    this.icon2?.nativeElement.classList.add('fade-in');

    switch (this.card.cardType.typeName) {
      case "Theme":
        this.icon1?.nativeElement.classList.add('theme-filter');
        this.icon2?.nativeElement.classList.add('theme-filter');
        break;
      case "Goal":
        this.icon1?.nativeElement.classList.add('goal-filter');
        this.icon2?.nativeElement.classList.add('goal-filter');
        break;
      case "Setting":
        this.icon1?.nativeElement.classList.add('setting-filter');
        this.icon2?.nativeElement.classList.add('setting-filter');
        break;
      case "Wildcard":
        this.icon1?.nativeElement.classList.add('wildcard-filter');
        this.icon2?.nativeElement.classList.add('wildcard-filter');
        break;
    }
  }

  grabCard() {
    console.log("Grabbed");
  }
  
  dropCard() {
    console.log("Dropped");
  }

  onTransitionEnd(event: Event) {
    console.log("done transitioning");
  }
}