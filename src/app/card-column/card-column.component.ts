import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import arrayShuffle from 'array-shuffle';
import { CardService } from '../card.service';
import { ICard } from '../models/card';

@Component({
  selector: 'card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.less']
})
export class CardColumnComponent implements OnInit {
  @Input()
  cardType: string = 'Goal';
  @Input()
  numberToDraw: number = 1;
  
  deck: ICard[] = [];
  hand: ICard[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCards(this.cardType).subscribe(cards => {
      this.deck = cards;
      if (this.deck.length > 0) {
        this.deck = arrayShuffle(this.deck);
        for (let index = 0; index < this.numberToDraw; index++) {
          this.drawCard();
        }
      }
    });
  }

  drawCard() {
    let newCard = this.deck.pop();
    if (newCard) {
      this.hand.push(newCard);
    }
  }

  discardCard(index: number) {
    let oldCard = this.hand.at(index);
    if (oldCard) {
      // Put the card at the bottom of the deck
      this.deck.splice(0, 0, oldCard);
      delete this.hand[index];
    }
  }
}