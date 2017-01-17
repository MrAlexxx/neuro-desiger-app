import { Component, OnInit, ViewChild, Renderer, ElementRef, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";



@Component({
    moduleId: module.id,
    selector: 'item-details',
    templateUrl: 'item-details.component.html',
    styleUrls: ['item-details.component.css'],
    // providers: [ItemsService],
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

    img: any;
    isOpenMenu: boolean;
    isMinimized: boolean;
    dragPosition: any;
    draggable: boolean;

    items: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire){
        this.items = af.database.list('/items');
        console.log(this.items);
    }



    ngOnInit(){
        this.draggable = false;
        this.isOpenMenu = true;
        this.isMinimized = true;

        this.img = {
            'src': 'sofa7.png'
        }
        console.log(this.items);
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

    onAnimate(arg: boolean){
        this.isOpenMenu = arg;
        console.log(arg);
    }

    toogleClass(){
        this.isMinimized = !this.isMinimized;
    }

}


