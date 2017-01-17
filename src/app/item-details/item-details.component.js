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
var items_service_1 = require("../items.service"); //????
var _1 = require("angularfire2/");
var ItemDetailsComponent = (function () {
    //
    function ItemDetailsComponent(item, af) {
        this.item = item;
        this.af = af;
        // this.items = af.database.list('/items');
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        this.draggable = false;
        this.isOpenMenu = true;
        this.isMinimized = true;
        this.img = {
            'src': 'sofa7.png'
        };
        // console.log(this.items);
    };
    // If you want to be notified of changes in a query list
    // ngAfterContentInit() {
    //     this.items.changes.subscribe(() => {
    //         // will be called every time an item is added/removed
    //     });
    // }
    ItemDetailsComponent.prototype.onDragStart = function (e, element) {
        var elemPosition = element.getBoundingClientRect();
        this.draggable = true;
        this.dragPosition = {
            '_startX': e.clientX,
            '_startY': e.clientY,
            '_offsetX': Math.round(elemPosition.left),
            '_offsetY': Math.round(elemPosition.top)
        };
    };
    ItemDetailsComponent.prototype.onDrag = function (e, element) {
        var top = (this.dragPosition._offsetY + e.pageY - this.dragPosition._startY) + 'px';
        var left = (this.dragPosition._offsetX + e.pageX - this.dragPosition._startX) + 'px';
        if (this.draggable && (e.pageY > 0) && (e.pageX > 0) && !(element.style.top == top && element.style.left == left)) {
            element.style.top = top;
            element.style.left = left;
        }
        e.preventDefault();
    };
    ItemDetailsComponent.prototype.onDrop = function (e) {
        this.draggable = false;
    };
    ItemDetailsComponent.prototype.onAnimate = function (arg) {
        this.isOpenMenu = arg;
        console.log(arg);
    };
    ItemDetailsComponent.prototype.toogleClass = function () {
        this.isMinimized = !this.isMinimized;
    };
    ItemDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'item-details',
            templateUrl: 'item-details.component.html',
            styleUrls: ['item-details.component.css'],
            providers: [items_service_1.ItemsService],
            animations: [
                core_1.trigger('menuMovement', [
                    core_1.transition('0 => 1', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ transform: 'translateY(0px)', offset: 0 }),
                            core_1.style({ transform: 'translateY(10px)', offset: .50 }),
                            core_1.style({ transform: 'translateY(20px)', offset: 1 }),
                        ]))
                    ]),
                    core_1.transition('1 => 0', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ offset: 0 }),
                            core_1.style({ transform: 'translateY(-15px)', offset: .75 }),
                            core_1.style({ transform: 'translateY(-20px)', offset: 1 }),
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService, _1.AngularFire])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());
exports.ItemDetailsComponent = ItemDetailsComponent;
//# sourceMappingURL=item-details.component.js.map