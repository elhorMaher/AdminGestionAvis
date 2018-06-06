
import { Component, Input } from '@angular/core';

import { RestaurantService } from '../shared/restaurant.service';

import { Restaurant } from '../shared/restaurant-model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent  {

  @Input()
  restaurant: any;

  constructor(private restaurantService: RestaurantService) { }

 

  deleteRestaurant(id: string) {
    if(confirm("Are you sure to delete "+name))
    this.restaurantService.deleteRestaurant(id);
  }

}
