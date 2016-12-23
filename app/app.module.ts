import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemDetailComponent } from "./item-details/item-details.component";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      ItemDetailComponent
  ],
  providers:        [
    //MyService, MyOtherService
  ],
  bootstrap:    [
      AppComponent
  ]
})
export class AppModule { }
