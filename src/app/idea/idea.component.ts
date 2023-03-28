import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IDEA } from '../mock-ideas';
import { IIdea } from '../models/idea';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.less'],
  animations: [
    trigger('fade', [
      state('*', style({ opacity: 0 })),
      state('fadedOut', style({ opacity: 0 })),
      state('fadedIn', style({ opacity: 1 })),
      transition(':enter', [
        style({opacity: 1})
      ]),
      transition('* => fadedIn', [
        animate('2s 3s ease-in')
      ]), 
      transition('* => fadedOut', [
        animate('2s 3s ease-out')
      ])
    ])
  ]
})

export class IdeaComponent implements AfterViewInit{
  @Input()
  idea: IIdea = IDEA;
  
  @ViewChild('firstIcon') firstIcon: ElementRef | undefined;
  @ViewChild('secondIcon') secondIcon: ElementRef | undefined;
  @ViewChild('lockIcon') lockIcon: ElementRef | undefined;

  showFirstIcon: BehaviorSubject<boolean>;
  showSecondIcon: BehaviorSubject<boolean>;
  firstIconIndex: number = 0;
  secondIconIndex: number = this.firstIconIndex + 1;
  locked = false;
  grabbed = false;

  constructor(private elementRef: ElementRef) {
    this.showFirstIcon = new BehaviorSubject(false);
    this.showSecondIcon = new BehaviorSubject(true);
  }

  ngAfterViewInit(): void {
    this.firstIcon?.nativeElement.classList.add('icon');
    this.secondIcon?.nativeElement.classList.add('icon');

    switch (this.idea.ideaType.typeName) {
      case 'Theme':
        this.firstIcon?.nativeElement.classList.add('theme-filter');
        this.secondIcon?.nativeElement.classList.add('theme-filter');
        this.lockIcon?.nativeElement.classList.add('theme-filter');
        break;
      case 'Goal':
        this.firstIcon?.nativeElement.classList.add('goal-filter');
        this.secondIcon?.nativeElement.classList.add('goal-filter');
        this.lockIcon?.nativeElement.classList.add('goal-filter');
        break;
      case 'Setting':
        this.firstIcon?.nativeElement.classList.add('setting-filter');
        this.secondIcon?.nativeElement.classList.add('setting-filter');
        this.lockIcon?.nativeElement.classList.add('setting-filter');
        break;
      case 'Wildcard':
        this.firstIcon?.nativeElement.classList.add('wildcard-filter');
        this.secondIcon?.nativeElement.classList.add('wildcard-filter');
        this.lockIcon?.nativeElement.classList.add('wildcard-filter');
        break;
    }
  }

  onLockClicked() {
    this.locked = !this.locked;
    if (this.locked) {
      this.lockIcon?.nativeElement.classList.add('lock');
      this.lockIcon?.nativeElement.classList.remove('unlock');
    } else {
      this.lockIcon?.nativeElement.classList.add('unlock');
      this.lockIcon?.nativeElement.classList.remove('lock');
    }
  }

  onFadeDone(event: any) {
    if (!this.showFirstIcon.value) {
      if (this.secondIconIndex + 1 >= this.idea.icons.length) {
        this.firstIconIndex = 0;
      } else {
        this.firstIconIndex = this.secondIconIndex + 1;
      }
    }
    
    if (!this.showSecondIcon.value) {
      if (this.firstIconIndex + 1 >= this.idea.icons.length) {
        this.secondIconIndex = 0;
      } else {
        this.secondIconIndex = this.firstIconIndex + 1;
      }
    }
    this.showFirstIcon.next(!this.showFirstIcon.value);
    this.showSecondIcon.next(!this.showSecondIcon.value);
  }

  grabIdea() {
    if (!this.locked) {
      this.grabbed = true;
    }
  }
  
  dropIdea() {
    this.grabbed = false;
  }
}