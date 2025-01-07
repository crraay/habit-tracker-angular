import { animate, animation, style } from "@angular/animations";

export const heightOutAnimation = animation([
    animate(
        '500ms ease-in-out',
        style({
            height: 0
        })
    )
]);
