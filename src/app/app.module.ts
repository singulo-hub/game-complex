import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeasComponent } from './ideas/ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
