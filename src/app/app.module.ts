import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowmoviesDirective } from './showmovies.directive';
import { SurvolageDirective } from './survolage.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowmoviesDirective,
    SurvolageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
