import { Component, Input } from '@angular/core';
import { CARD } from '../mock-cards';
import { ICard } from '../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input()
  card: ICard = CARD;

  grabCard() {
    console.log("Grabbed");
  }
  
  dropCard() {
    console.log("Dropped");
  }
}