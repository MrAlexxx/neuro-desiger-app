import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

import {default as menuAnimations} from '../menu-animatios';

const MENUBUTTONS = [
    {
        "id":-2,"btnClass":"color", "glypClass":"glyphicon-tint"
    },
    {
        "id":-1,"btnClass":"resize", "glypClass":"glyphicon-fullscreen"
    },
    {
        "id":0,"btnClass":"info", "glypClass":"glyphicon-info-sign"
    },
    {
        "id":1,"btnClass":"print", "glypClass":"glyphicon-print"
    },
    {
        "id":2,"btnClass":"cart", "glypClass":"glyphicon-shopping-cart"
    }
];

@Component({
    moduleId: module.id,
    selector: 'item-details-menu',
    templateUrl: 'item-details-menu.component.html',
    styleUrls: ['item-details-menu.component.css'],
    animations: [
        //animation menu
        menuAnimations('color'),
        menuAnimations('resize'),
        menuAnimations('info'),
        menuAnimations('print'),
        menuAnimations('cart'),

        //animation menu button
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
    menuButtons: any;
    menuCircleClasses: any;

    constructor(){
        this.name = 'item-menu';
        this.isOpenMenu = false;
        this.menuButtons = MENUBUTTONS;
    }

    toggleMenu(){
        this.isOpenMenu = !this.isOpenMenu;
    }

    animationDone(e){
        this.menuCircleClasses = {'menu-circle': true, 'absolute-center': true, 'open':this.isOpenMenu};
    }

}
