import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'item-details',
    templateUrl: 'item-details.component.html',
    styleUrls: ['item-details.component.css']

})

export class ItemDetailsComponent  {
    name: string;

    constructor(){
        this.name = 'Angular';

    }


}


