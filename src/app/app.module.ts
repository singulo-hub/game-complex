import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardColumnComponent } from './card-column/card-column.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
