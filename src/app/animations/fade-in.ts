import { animate, animation, style } from "@angular/animations";

export const fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate(
        '200ms ease-in-out',
        style({
            opacity: 1
        })
    ),
]);
