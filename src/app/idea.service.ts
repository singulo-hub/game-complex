import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOALS } from './data/goals';
import { SETTINGS } from './data/settings';
import { THEMES } from './data/themes';
import { WILDCARDS } from './data/wildcards';
import { IIdea } from './models/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  getIdeas(ideaType: string): Observable<IIdea[]> {
    let cards = of(GOALS);
    switch (ideaType) {
      case "Settings":
        cards = of(SETTINGS);
        break;
      case "Themes":
        cards = of(THEMES);
        break;
      case "Wildcards":
        cards = of(WILDCARDS);
        break;
    }
    return cards;
  }
}
