import { animate, animation, style } from "@angular/animations";

export const fadeOutAnimation = animation([
    animate(
        '200ms ease-in-out', 
        style({
            opacity: 0
        })
    )
]);
