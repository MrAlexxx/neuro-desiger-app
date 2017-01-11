import { Component, OnInit, ViewChild, Renderer, ElementRef, trigger, state, style, transition, animate, keyframes} from '@angular/core';

import { window } from "rxjs/operator/window";
import { start } from "repl";

@Component({
    moduleId: module.id,
    selector: 'item-details',
    templateUrl: 'item-details.component.html',
    styleUrls: ['item-details.component.css']

})

export class ItemDetailsComponent implements OnInit{
    // @ViewChild('itemBox') private itemBox: ElementRef;
    // @ContentChildren('list-item') items: QueryList<ElementRef>; // if we need the list of elements
    name: string;
    img: any;
    dragPosition: any;
    draggable: boolean;

    constructor(public renderer: Renderer, private _elementRef: ElementRef ){  }

    ngOnInit(){
        this.name = 'Angular';
        this.draggable = false;

        this.img = {
            'src': 'sofa7.png'
        }
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
            '_offsetY': Math.round(elemPosition.top),
        };

    }

    onDrag(e: MouseEvent, element: any){

        let top: string = (this.dragPosition._offsetY + e.pageY - this.dragPosition._startY) + 'px';
        let left: string = (this.dragPosition._offsetX + e.pageX - this.dragPosition._startX) + 'px';

        if(this.draggable && (e.pageY > 0) && (e.pageX > 0) &&  !(element.style.top == top && element.style.left == left)) {
            element.style.top = top;
            element.style.left = left;
        }

        e.preventDefault();
    }


    onDrop(e: MouseEvent) {
        this.draggable = false;
    }

}


