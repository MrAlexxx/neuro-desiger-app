import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from "@angular/http";

import { ItemDetailsComponent } from "./item-details/item-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemDetailsMenuComponent } from "./item-details-menu/item-details-menu.component";
import { ItemsMenuComponent } from "./items-menu/items-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";

import { firebaseConfig } from './enviroments/firebase.config';
// import { AngularFireModule } from "angularfire2/angularfire2";


@NgModule({
  imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      // AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
      AppComponent,
      ItemDetailsComponent,
      ItemDetailsMenuComponent,
      ItemsMenuComponent,
      UserMenuComponent
  ],
  providers:        [
    //MyService, MyOtherService
  ],
  bootstrap:    [
      AppComponent
  ]
})
export class AppModule { }
