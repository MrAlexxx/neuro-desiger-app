import { Component, OnInit, trigger, transition, animate, style, keyframes, Output, EventEmitter } from "@angular/core";

const ITEMS = [
    {
        'name': 'Living Room',
        'icon': 'icon_sofa',
        'qty': 0,
        'visible': true
    },
    {
        'name': 'Kitchen',
        'icon': 'icon_oven',
        'qty': 0,
        'visible': true
    },
    {
        'name': 'Bedroom',
        'icon': 'icon_bed',
        'qty': 0,
        'visible': true
    },
    {
        'name': 'Home Office',
        'icon': 'icon_writing-table',
        'qty': 0,
        'visible': true
    },
    {
        'name': 'Home Gym',
        'icon': 'icon_stationary-bike',
        'qty': 0,
        'visible': true
    },
    {
        'name': 'Closets',
        'icon': 'icon_wardrobe',
        'qty': 0,
        'visible': true
    }

];


@Component({
    moduleId: module.id,
    selector: 'items-menu',
    templateUrl: 'items-menu.component.html',
    styleUrls: ['items-menu.component.css'],
    animations: [
        trigger('animationMenu',[
            transition('0 => 1', [
                animate(600, keyframes([
                    style({height: '*',    offset:0}),
                    style({height: '60vh', offset:.50}),
                    style({height: '60vh', offset:1}),
                ]))
            ]),
            transition('1 => 0', [   //transition('void => *', [
                animate(600, keyframes([
                    style({height: '*',   offset:0}),
                    style({height: '7vh', offset:.75}),
                    style({height: '7vh', offset:1}),
                ]))
            ])
        ]),

        trigger('animationMenuItem',[
            transition('0 => 1', [
                animate(600, keyframes([
                    style({height: '0',   offset:0}),
                    style({height: '30%', offset:.50}),
                    style({height: '72%', offset:1}),
                ]))
            ]),
            transition('1 => 0', [   //transition('void => *', [
                animate(600, keyframes([
                    style({height: '*',   offset:0}),
                    style({height: '0%',  offset:.75}),
                    style({height: '0%',  offset:1}),
                ]))
            ])
        ]),

        trigger('hideShow',[
            transition('0 => 1', [
                animate(600, keyframes([
                    style({opacity: '0', offset:0}),
                    style({opacity: '1', offset:1}),
                ]))
            ]),
            transition('1 => 0', [
                animate(600, keyframes([
                    style({opacity: '1',  offset:0}),
                    style({opacity: '0',  offset:1}),
                ]))
            ])
        ]),
    ]
})

export class ItemsMenuComponent implements OnInit{
    @Output() onAnimate = new EventEmitter<boolean>();

    items: Object;
    isOpenMenu: boolean;
    menuClasses: Object;
    menuOverflow: string;


    constructor(){ }

    ngOnInit(){
        this.items = ITEMS;
        this.isOpenMenu = true;
        this.menuClasses = {'menu': true, 'minimize': false};
        this.menuOverflow = 'auto'
    }

    toggleMenu(){
        this.isOpenMenu = !this.isOpenMenu;
        this.menuOverflow = (this.menuOverflow === 'auto') ? "hidden" : "auto" ;

        this.sendData(this.isOpenMenu);
    }

    animationDone(){
        this.menuClasses = {'menu': true, 'minimize':  !this.isOpenMenu};
    }

    animationItemStart(){
        this.menuOverflow = "hidden";
        this.menuClasses = {'menu': true, 'minimize':  false};
    }

    sendData(arg: boolean){
        this.onAnimate.emit(arg);
    }
}