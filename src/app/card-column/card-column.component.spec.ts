import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColumnComponent } from './card-column.component';

describe('CardColumnComponent', () => {
  let component: CardColumnComponent;
  let fixture: ComponentFixture<CardColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
