"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ITEMS = [
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
var ItemsMenuComponent = (function () {
    function ItemsMenuComponent() {
        this.onAnimate = new core_1.EventEmitter();
    }
    ItemsMenuComponent.prototype.ngOnInit = function () {
        this.items = ITEMS;
        this.isOpenMenu = true;
        this.menuClasses = { 'menu': true, 'minimize': false };
        this.menuOverflow = 'auto';
    };
    ItemsMenuComponent.prototype.toggleMenu = function () {
        this.isOpenMenu = !this.isOpenMenu;
        this.menuOverflow = (this.menuOverflow === 'auto') ? "hidden" : "auto";
        this.sendData(this.isOpenMenu);
    };
    ItemsMenuComponent.prototype.animationDone = function () {
        this.menuClasses = { 'menu': true, 'minimize': !this.isOpenMenu };
    };
    ItemsMenuComponent.prototype.animationItemStart = function () {
        this.menuOverflow = "hidden";
        this.menuClasses = { 'menu': true, 'minimize': false };
    };
    ItemsMenuComponent.prototype.sendData = function (arg) {
        this.onAnimate.emit(arg);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ItemsMenuComponent.prototype, "onAnimate", void 0);
    ItemsMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'items-menu',
            templateUrl: 'items-menu.component.html',
            styleUrls: ['items-menu.component.css'],
            animations: [
                core_1.trigger('animationMenu', [
                    core_1.transition('0 => 1', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ height: '*', offset: 0 }),
                            core_1.style({ height: '60vh', offset: .50 }),
                            core_1.style({ height: '60vh', offset: 1 }),
                        ]))
                    ]),
                    core_1.transition('1 => 0', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ height: '*', offset: 0 }),
                            core_1.style({ height: '7vh', offset: .75 }),
                            core_1.style({ height: '7vh', offset: 1 }),
                        ]))
                    ])
                ]),
                core_1.trigger('animationMenuItem', [
                    core_1.transition('0 => 1', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ height: '0', offset: 0 }),
                            core_1.style({ height: '30%', offset: .50 }),
                            core_1.style({ height: '72%', offset: 1 }),
                        ]))
                    ]),
                    core_1.transition('1 => 0', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ height: '*', offset: 0 }),
                            core_1.style({ height: '0%', offset: .75 }),
                            core_1.style({ height: '0%', offset: 1 }),
                        ]))
                    ])
                ]),
                core_1.trigger('hideShow', [
                    core_1.transition('0 => 1', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ opacity: '0', offset: 0 }),
                            core_1.style({ opacity: '1', offset: 1 }),
                        ]))
                    ]),
                    core_1.transition('1 => 0', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ opacity: '1', offset: 0 }),
                            core_1.style({ opacity: '0', offset: 1 }),
                        ]))
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemsMenuComponent);
    return ItemsMenuComponent;
}());
exports.ItemsMenuComponent = ItemsMenuComponent;
//# sourceMappingURL=items-menu.component.js.map