import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//FireBase
import {  AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";

//Router
import { APP_ROUTERS } from "./app.routes";

import { AppComponent } from './app.component';
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemDetailsMenuComponent } from "./item-details-menu/item-details-menu.component";
import { ItemsMenuComponent } from "./items-menu/items-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";
import { ArComponent } from '../ar/ar.component';
import { ItemsService } from "./items.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    ItemDetailsMenuComponent,
    ItemsMenuComponent,
    UserMenuComponent,
    ArComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    APP_ROUTERS
  ],
  providers: [
    //MyService, MyOtherService
    ItemsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
