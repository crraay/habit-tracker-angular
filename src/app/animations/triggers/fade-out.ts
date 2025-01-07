import { sequence, transition, trigger, useAnimation } from "@angular/animations";
import { fadeOutAnimation } from "../fade-out";

export const fadeOutTrigger = trigger('fadeOut', [
    transition(':leave', [
        sequence([
            useAnimation(fadeOutAnimation)
        ])
    ])
]);
