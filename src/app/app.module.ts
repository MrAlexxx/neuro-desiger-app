import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {  AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";

import { AppComponent } from './app.component';
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemDetailsMenuComponent } from "./item-details-menu/item-details-menu.component";
import { ItemsMenuComponent } from "./items-menu/items-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    ItemDetailsMenuComponent,
    ItemsMenuComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    //MyService, MyOtherService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
