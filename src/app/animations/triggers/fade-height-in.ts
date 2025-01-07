import { sequence, style, transition, trigger, useAnimation } from "@angular/animations";
import { heightInAnimation, fadeInAnimation } from "..";

export const fadeHeightInTrigger = trigger('fadeHeightIn', [
    transition(':enter', [
        sequence([
            style({ height: 0, opacity: 0 }),
            useAnimation(heightInAnimation),
            useAnimation(fadeInAnimation)
        ])
    ])
]);
