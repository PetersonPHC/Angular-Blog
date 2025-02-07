import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(
    private route:ActivatedRoute
  ) {}
  private id: string = '';
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id") || '0');

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string ){
    const result = data.filter(article => article.id == id)[0];

    this.photoCover = result.photocover;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
