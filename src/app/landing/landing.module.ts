import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

//Components
import { LandingComponent }        from "./landing.component";
import { BannerComponent } from "./banner/banner.component";

//Services
import { ItemsService } from "../items.service";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        LandingComponent,
        BannerComponent
    ],
    exports: [ LandingComponent ],
    providers: [
        // ItemsService,

    ]
})

export class LandingModule { }
