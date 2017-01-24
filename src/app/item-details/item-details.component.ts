import { Component, OnInit, ViewChild, Renderer, ElementRef, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import 'rxjs/add/operator/map';
import { async } from "rxjs/scheduler/async";
import { ItemsService } from "../items.service";

@Component({
    moduleId: module.id,
    selector: 'item-details',
    templateUrl: 'item-details.component.html',
    styleUrls: ['item-details.component.css'],
    animations:[
        trigger('menuMovement',[
            transition('0 => 1', [
                animate(600, keyframes([
                    style({transform: 'translateY(0px)', offset:0}),
                    style({transform: 'translateY(10px)', offset:.50}),
                    style({transform: 'translateY(20px)', offset:1}),
                ]))
            ]),
            transition('1 => 0', [   //transition('void => *', [
                animate(600, keyframes([
                    style({offset:0}),
                    style({transform: 'translateY(-15px)', offset:.75}),
                    style({transform: 'translateY(-20px)', offset:1}),
                ]))
            ])
        ])
    ]

})

export class ItemDetailsComponent implements OnInit{
    // @ViewChild('itemBox') private itemBox: ElementRef;
    // @ContentChildren('list-item') items: QueryList<ElementRef>; // if we need the list of elements


    isOpenMenu: boolean;
    isMinimized: boolean;
    dragPosition: any;
    draggable: boolean;

    items: FirebaseObjectObservable<any[]>;
    item:  FirebaseObjectObservable<any>;

    constructor(private _itemService:ItemsService){
        this.items = _itemService.getItems();
        this.item = _itemService.getItem();
        this.getAllItems();
        this.getItem();
    }

    getAllItems(){
        this.items = this._itemService.getItems();
    }

    getItem(id :number = 0): void{
        this.item = this._itemService.getItem(id )
    }

    next(): void{ this.item.subscribe(item => { this.getItem(item.id + 1) }); }

    prev(): void{ this.item.subscribe(item => { this.getItem(item.id - 1) }); }




    ngOnInit(){
        this.draggable = false;
        this.isOpenMenu = true;
        this.isMinimized = true;
    }

    // If you want to be notified of changes in a query list
    // ngAfterContentInit() {
    //     this.items.changes.subscribe(() => {
    //         // will be called every time an item is added/removed
    //     });
    // }

    onDragStart (e: MouseEvent, element: any) {// todo: change element type
        let elemPosition = element.getBoundingClientRect();
        this.draggable = true;
        this.dragPosition = {
            '_startX': e.clientX,
            '_startY': e.clientY,
            '_offsetX': Math.round(elemPosition.left),
            '_offsetY': Math.round(elemPosition.top)
        };

    }

    onDrag(e: MouseEvent, element: any): void{
        e.preventDefault();
        let top: string = (this.dragPosition._offsetY + e.pageY - this.dragPosition._startY) + 'px';
        let left: string = (this.dragPosition._offsetX + e.pageX - this.dragPosition._startX) + 'px';

        if(this.draggable && (e.pageY > 0) && (e.pageX > 0) &&  !(element.style.top == top && element.style.left == left)) {
            element.style.top = top;
            element.style.left = left;
        }


    }


    onDrop(e: MouseEvent): void {
        e.preventDefault();
        this.draggable = false;
    }

    onAnimate(arg: boolean): void{
        this.isOpenMenu = arg;
        console.log(arg);
    }

    toogleClass(): void{
        this.isMinimized = !this.isMinimized;
    }



}


