import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GOALS, SETTINGS, THEMES, WILDCARDS } from './mock-ideas';
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
