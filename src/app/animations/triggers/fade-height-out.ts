import { animation, sequence, transition, trigger, useAnimation } from "@angular/animations";
import { fadeOutAnimation, heightOutAnimation } from "..";

export const fadeHeightOutTrigger = trigger('fadeHeightOut', [
    transition(':leave', [
        sequence([
            useAnimation(fadeOutAnimation),
            useAnimation(heightOutAnimation)
        ])
    ])
]);
