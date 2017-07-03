// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { ItemDetailsComponent } from "./item-details/item-details.component";
//
//
// export const ROUTES: Routes = [
//     { path: '', component: ItemDetailsComponent },
//     // { path: '', redirectTo: 'contact', pathMatch: 'full'},
//
//     { path: 'ar/:key', loadChildren: 'app/ar/ar.module#ArModule' },
//     // { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' }
//     // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
// ];
//
// @NgModule({
//     imports: [RouterModule.forRoot(ROUTES)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}

import { provideRoutes, Routes, RouterModule } from "@angular/router";

import { ItemDetailsComponent } from "./item-details/item-details.component";
import { LandingComponent } from "./landing/landing.component";
import { ModuleWithProviders } from "@angular/core";
import { ArComponent } from "./ar/ar.component";


export const APP_ROUTER: Routes = [
    { path: '', component: LandingComponent },
    { path: 'items', component: ItemDetailsComponent },
    // { path: '', path: 'full', redirectTo: 'any url'},
    { path: 'ar/:key', component: ArComponent },
];

export const APP_ROUTERS: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);