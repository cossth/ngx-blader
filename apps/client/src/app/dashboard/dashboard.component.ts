import { Component, OnInit } from '@angular/core';
import * as linksIm from './links.json';
@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  links = (linksIm as any).default as {
    "link": string,
    "icon": string,
    "text": string
  }[];
  constructor() {
    console.log(this.links);
  }

  ngOnInit() {
  }

}
