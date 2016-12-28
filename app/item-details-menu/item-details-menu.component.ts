import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'item-details-menu',
    templateUrl: 'item-details-menu.component.html',
    styleUrls: ['item-details-menu.component.css'],
    animations: [
        trigger('animationMenuButton',[
            transition('0 => 1', [
                animate(600, keyframes([
                    style({opacity: 0, transform: 'translateY(-20px)', offset:0}),
                    style({opacity: 1, transform: 'translateY(5px)', offset:.75}),
                    style({opacity: 1, transform: 'translateY(0)', offset:1}),
                ]))
            ]),
            transition('1 => 0', [   //transition('void => *', [
                animate(600, keyframes([
                    style({opacity: 0, transform: 'translateY(20px)', offset:0}),
                    style({opacity: 1, transform: 'translateY(-5px)', offset:.75}),
                    style({opacity: 1, transform: 'translateY(0)', offset:1}),
                ]))
            ])
        ])
    ]
})

export class ItemDetailsMenuComponent{
    name: string;
    isOpenMenu: boolean;

    constructor(){
        this.name = 'item-menu';
        this.isOpenMenu = false;
    }

    toggleMenu(){
        this.isOpenMenu = !this.isOpenMenu;
    }

}
