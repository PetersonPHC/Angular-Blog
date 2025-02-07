import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  constructor() {}

  @Input() id:string = '';
  @Input() photoCover: string = '';
  @Input() cardDate: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '0';

}
