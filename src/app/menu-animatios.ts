import {
    trigger,
    animate,
    style,
    keyframes,
    transition
} from '@angular/core';


var buttonAnimationProperties = {
    "color": -90,
    "resize": -45,
    "info": 0,
    "print":45,
    "cart": 90,
};

//todo: should optimize animation (one animation for all menu buttons)
export default function(name: string) {

    return trigger(name, [
        transition('0 => 1', [
            animate(1200, keyframes([
            style({opacity: 0, transform: 'rotate(90deg) translate(0px) rotate(-90deg)', offset:0}), // or translate(150px)
            style({opacity: 1, transform: 'rotate('+buttonAnimationProperties[name]+'deg) translate(150px) rotate('+(buttonAnimationProperties[name]*(-1))+'deg)', offset:1}),
            ]))
        ]),
        transition('1 => 0', [
            animate(600, keyframes([
                style({opacity: 1, transform: 'rotate('+buttonAnimationProperties[name]+'deg) translate(150px) rotate('+(buttonAnimationProperties[name]*(-1))+'deg)', offset:0}),
                style({opacity: 0, transform: 'rotate(90deg) translate(0px) rotate(-90deg)', offset:1}),
            ]))
        ])
    ]);
};

