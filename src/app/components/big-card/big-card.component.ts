import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  constructor() {}

  @Input() photoCover: string = "";
  @Input() cardDate: string = "";
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";

}
