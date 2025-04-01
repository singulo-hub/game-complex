import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { goalType } from './data/goals';
import { wildcardType } from './data/wildcards';
import { themeType } from './data/themes';
import { settingType } from './data/settings';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: false
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
