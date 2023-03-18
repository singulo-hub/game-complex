import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CARD } from '../mock-cards';
import { ICard } from '../models/card';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  animations: [
    trigger('fade', [
      state('*', style({ opacity: 0 })),
      state('fadedOut', style({ opacity: 0 })),
      state('fadedIn', style({ opacity: 1 })),

      transition('* => fadedIn', [
        animate(3000)
      ]), 
      transition('* => fadedOut', [
        animate(3000)
      ])
    ])
  ]
})

export class CardComponent implements AfterViewInit{
  @Input()
  card: ICard = CARD;

  @ViewChild('icon1') icon1: ElementRef | undefined;
  @ViewChild('icon2') icon2: ElementRef | undefined;

  showIcon1: BehaviorSubject<boolean>;
  showIcon2: BehaviorSubject<boolean>;
  icon1SrcIndex: number = 0;
  icon2SrcIndex: number = this.icon1SrcIndex + 1;

  constructor(private elementRef: ElementRef) {
    this.showIcon1 = new BehaviorSubject(false);
    this.showIcon2 = new BehaviorSubject(true);
  }

  ngAfterViewInit(): void {
    this.icon1?.nativeElement.classList.add('icon');
    this.icon2?.nativeElement.classList.add('icon');

    switch (this.card.cardType.typeName) {
      case 'Theme':
        this.icon1?.nativeElement.classList.add('theme-filter');
        this.icon2?.nativeElement.classList.add('theme-filter');
        break;
      case 'Goal':
        this.icon1?.nativeElement.classList.add('goal-filter');
        this.icon2?.nativeElement.classList.add('goal-filter');
        break;
      case 'Setting':
        this.icon1?.nativeElement.classList.add('setting-filter');
        this.icon2?.nativeElement.classList.add('setting-filter');
        break;
      case 'Wildcard':
        this.icon1?.nativeElement.classList.add('wildcard-filter');
        this.icon2?.nativeElement.classList.add('wildcard-filter');
        break;
    }
  }

  onFadeDone(event: any) {
    if (!this.showIcon1.value) {
      if (this.icon2SrcIndex + 1 >= this.card.icons.length) {
        this.icon1SrcIndex = 0;
      } else {
        this.icon1SrcIndex = this.icon2SrcIndex + 1;
      }
    }
    
    if (!this.showIcon2.value) {
      if (this.icon1SrcIndex + 1 >= this.card.icons.length) {
        this.icon2SrcIndex = 0;
      } else {
        this.icon2SrcIndex = this.icon1SrcIndex + 1;
      }
    }
    this.showIcon1.next(!this.showIcon1.value);
    this.showIcon2.next(!this.showIcon2.value);
  }

  grabCard() {
    console.log("Grabbed");
  }
  
  dropCard() {
    console.log("Dropped");
  }
}