import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { SmallXComponent } from './components/small-x/small-x.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
