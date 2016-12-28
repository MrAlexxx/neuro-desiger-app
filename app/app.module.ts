import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemDetailsMenuComponent } from "./item-details-menu/item-details-menu.component";

@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      ItemDetailsComponent,
      ItemDetailsMenuComponent
  ],
  providers:        [
    //MyService, MyOtherService
  ],
  bootstrap:    [
      AppComponent
  ]
})
export class AppModule { }
