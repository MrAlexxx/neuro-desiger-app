import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ArComponent } from "./ar.component";



@NgModule({
    declarations: [
        ArComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        //MyService, MyOtherService
    ],
    exports: [ArComponent]

})
export class AppModule { }
