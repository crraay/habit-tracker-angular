import { sequence, transition, trigger, useAnimation } from "@angular/animations";
import { fadeInAnimation } from "../fade-in";

export const fadeInTrigger = trigger('fadeIn', [
    transition(':enter', [
        sequence([
            useAnimation(fadeInAnimation)
        ])
    ])
]);
