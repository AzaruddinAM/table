import { Component, OnInit } from '@angular/core';
import users from '../../assets/sampleJson.json';
@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {
  products: any = (users as any).default;
  
  constructor() { }

  ngOnInit() {
  }

}
