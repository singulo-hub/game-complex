import { Component, ElementRef, HostListener } from '@angular/core';
import { goal, wildcard, theme, setting } from './mock-ideas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  title: string = 'game-complex';
  theme = theme;
  goal = goal;
  wildcard = wildcard;
  setting = setting;
}
