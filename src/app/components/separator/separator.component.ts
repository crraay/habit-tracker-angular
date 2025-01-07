import { Component, Input } from '@angular/core';

@Component({
  selector: 'ht-separator',
  standalone: true,
  imports: [],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss'
})
export class SeparatorComponent {

  @Input()
  text: string;

}
