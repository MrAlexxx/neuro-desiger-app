import { Component, OnInit, trigger, transition, animate, style, keyframes, state } from "@angular/core";

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
    templateUrl: 'item-menu.component.html',
    styleUrls: ['item-menu.component.css'],
    animations: [
        trigger('animationMenu',[

            transition('0 => 1', [
                animate(600, keyframes([
                    style({height: '*', transform: 'translateY(0px)', offset:0}),
                    style({height: '60vh', transform: 'translateY(15px)', offset:.75}),
                    style({height: '60vh', transform: 'translateY(20px)', offset:1}),
                ]))
            ]),
            transition('1 => 0', [   //transition('void => *', [
                animate(600, keyframes([
                    style({height: '*',   offset:0}),
                    style({height: '7vh', transform: 'translateY(-15px)', offset:.75}),
                    style({height: '7vh', transform: 'translateY(-20px)', offset:1}),
                ]))
            ])
        ]),
        trigger('animationMenuItem',[

            transition('0 => 1', [
                animate(600, keyframes([
                    style({opacity: 0, transform: 'translateY(0px)', offset:0}),
                    style({opacity: 1, transform: 'translateY(15px)', offset:.25}),
                    style({opacity: 1, transform: 'translateY(20px)', offset:1}),
                ]))
            ]),
            transition('1 => 0', [   //transition('void => *', [
                animate(600, keyframes([
                    style({opacity: 1, offset:0}),
                    style({opacity: 0, transform: 'translateY(-15px)', offset:.25}),
                    style({opacity: 0, transform: 'translateY(-20px)', offset:1}),
                ]))
            ])
        ])
    ]
})

export class ItemsMenuComponent implements OnInit{
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
        console.log(this.isOpenMenu);
    }

    animationDone(){
        this.menuClasses = {'menu': true, 'minimize':  !this.isOpenMenu};
    }

    animationStart(){

        console.log('121');
    }
}