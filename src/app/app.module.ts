import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//FireBase
import {  AngularFireModule } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";

//Router
// import { AppRoutingModule } from "./app.routes";
import { APP_ROUTERS } from "./app.routes";

//Components
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemDetailsMenuComponent } from "./item-details-menu/item-details-menu.component";
import { ItemsMenuComponent } from "./items-menu/items-menu.component";
import { UserMenuComponent } from "./user-menu/user-menu.component";

//Services
import { ItemsService } from "./items.service";

//Modules
import { ArModule }     from "./ar/ar.module";
import { LandingModule } from "./landing/landing.module";



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
    ArModule,
    LandingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    APP_ROUTERS
    // AppRoutingModule
  ],
  providers: [
    //MyService, MyOtherService
    ItemsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
