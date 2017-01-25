import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

//Components
import { ArComponent }        from "./ar.component";
import { RenderDirective }    from "./render.directive";

//Services
import { ItemsService } from "../items.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ArComponent,
        RenderDirective
    ],
    exports: [ ArComponent ],
    providers: [ ItemsService ]
})

export class ArModule { }
