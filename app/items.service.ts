import { Injectable } from "@angular/core";

@Injectable()
export class ItemsService{

    log(){
        console.log('service');
    }

    constructor(){}
}