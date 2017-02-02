import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

//Components
import { ArComponent }        from "./ar.component";

//Services
import { ItemsService } from "../items.service";
import { RenderService }    from "./render.service";
import { OrbitControlsService } from "./controls/orbit-controls.service";
import { ModelsService } from "./models/models.service";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ArComponent
    ],
    exports: [ ArComponent ],
    providers: [
        ItemsService,
        RenderService,
        ModelsService
        // OrbitControlsService
    ]
})

export class ArModule { }
