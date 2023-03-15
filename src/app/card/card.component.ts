import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  title: string = 'Placeholder';
  icons: any[] = [];
  description: string = 'You should probably change this.';

  constructor() {

  }
}