import { Component, OnInit } from '@angular/core';



import { ItemService } from '../shared/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
