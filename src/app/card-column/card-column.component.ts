import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.less']
})
export class CardColumnComponent {
  @Input()
  name: string = 'Placeholder';
  @Input()
  numberToDraw: number = 1;
}
