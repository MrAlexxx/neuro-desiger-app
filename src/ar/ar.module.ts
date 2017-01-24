import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { ArComponent } from "./ar.component";
import { RenderComponent } from "./render.component";
import { ItemsService } from "../items.service";



@NgModule({
    declarations: [
        ArComponent,
        RenderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        //MyService, MyOtherService
        ItemsService
    ],
    exports: [ ArComponent ]

})
export class ArModule { }
