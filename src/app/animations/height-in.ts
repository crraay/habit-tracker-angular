import { animate, animation, style } from "@angular/animations";

export const heightInAnimation = animation([
    style({ height: 0 }),
    animate(
        '500ms ease-in-out',
        style({
            height: '*'
        })
    ),
]);
