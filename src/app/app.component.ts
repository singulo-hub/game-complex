import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
  }
  
  title: string = 'game-complex';
}
