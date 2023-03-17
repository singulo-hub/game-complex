import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOALS, SETTINGS, THEMES, WILDCARDS } from './mock-cards';
import { ICard } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  getCards(cardType: string): Observable<ICard[]> {
    let cards = of(GOALS);
    switch (cardType) {
      case "Setting":
        cards = of(SETTINGS);
        break;
      case "Theme":
        cards = of(THEMES);
        break;
      case "Wildcard":
        cards = of(WILDCARDS);
        break;
    }
    return cards;
  }
}
