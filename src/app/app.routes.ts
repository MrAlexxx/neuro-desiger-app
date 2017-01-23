import { provideRoutes, Routes, RouterModule } from "@angular/router";

import { ArComponent } from "../ar/ar.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ModuleWithProviders } from "@angular/core";


export const APP_ROUTER: Routes = [
    { path: '', component: ItemDetailsComponent },
    // { path: '', path: 'full', redirectTo: 'any url'},
    { path: 'ar/:key', component: ArComponent },
];

export const APP_ROUTERS: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);