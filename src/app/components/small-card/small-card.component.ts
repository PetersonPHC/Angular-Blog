import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
   constructor() {}

    @Input() photoCover: string = "";
    @Input() cardDate: string = "";
    @Input() cardTitle: string = "";

}
