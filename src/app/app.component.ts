import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { goalType, wildcardType, themeType, settingType } from './mock-ideas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  title: string = 'game-complex';

  themeType = themeType;
  goalType = goalType;
  wildcardType = wildcardType;
  settingType = settingType;

  randomizeSubject: Subject<void> = new Subject<void>;

  onRandomizeClicked(event: any) {
    this.randomizeSubject.next();
  }
}
