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
var core_1 = require('@angular/core');
var menu_animatios_1 = require('../menu-animatios');
var ItemDetailsMenuComponent = (function () {
    function ItemDetailsMenuComponent() {
        this.name = 'item-menu';
        this.isOpenMenu = false;
    }
    ItemDetailsMenuComponent.prototype.toggleMenu = function () {
        this.isOpenMenu = !this.isOpenMenu;
    };
    ItemDetailsMenuComponent.prototype.animationDone = function () {
        this.menuCircleClasses = { 'menu-circle': true, 'absolute-center': true, 'open': this.isOpenMenu };
    };
    ItemDetailsMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-details-menu',
            templateUrl: 'item-details-menu.component.html',
            styleUrls: ['item-details-menu.component.css'],
            animations: [
                //animation menu
                menu_animatios_1.default('color'),
                menu_animatios_1.default('resize'),
                menu_animatios_1.default('info'),
                menu_animatios_1.default('print'),
                menu_animatios_1.default('cart'),
                //animation menu button
                core_1.trigger('animationMenuButton', [
                    core_1.transition('0 => 1', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(5px)', offset: .75 }),
                            core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ]),
                    core_1.transition('1 => 0', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(-5px)', offset: .75 }),
                            core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ItemDetailsMenuComponent);
    return ItemDetailsMenuComponent;
}());
exports.ItemDetailsMenuComponent = ItemDetailsMenuComponent;
//# sourceMappingURL=item-details-menu.component.js.map