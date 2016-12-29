import {
    trigger,
    animate,
    style,
    keyframes,
    transition
} from '@angular/core';

// var startingStyles = (styles) => {
//     styles['position'] = 'fixed';
//     styles['top'] = 0;
//     styles['left'] = 0;
//     styles['right'] = 0;
//     styles['height'] = '100%';
//     return styles;
// };

var buttonAnimationProperties = {
    "color": -90,
    "resize": -45,
    "info": 0,
    "print":45,
    "cart": 90,
};

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
                style({opacity: 1, transform: 'rotate(90deg) translate(0px) rotate(-90deg)', offset:1}),
            ]))
        ])
    ]);
}


// transition('0 => 1', [ //:leave = ?
//         animate(1200, keyframes([
//             style({opacity: 0, transform: 'rotate(0deg) translate(150px) rotate(0deg)', offset:0}),
//             // style({opacity: 1, /*transform: 'rotate(-100deg) translate(150px) rotate(100deg)',*/ offset:.75}),
//             style({opacity: 1, transform: 'rotate(100deg) translate(150px) rotate(100deg)', offset:1}),
//         ]))
//     ]),
//     transition('1 => 0', [   //transition('void => *', [
//         animate(600, keyframes([
//             // style({opacity: 0, transform: 'translateY(200px)', offset:0}),
//             // style({opacity: 1, transform: 'translateY(-5px)', offset:.75}),
//             style({opacity: 1, transform: 'rotate(90deg) translate(150px) rotate(90deg)', offset:0}),
//             style({opacity: 0, transform: 'rotate(0deg) translate(150px) rotate(0deg)', offset:1}),
//         ]))
//     ])