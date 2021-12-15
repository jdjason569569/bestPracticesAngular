import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [1,2,3,4,5,6,7,8];
  }

  trackByFn(index: any, item: any) {   
    console.log('id por trackBy -> ', item.id) 
    return item.id; 
 }

}
