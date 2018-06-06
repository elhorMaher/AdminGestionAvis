import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../shared/restaurant.service';

import { Restaurant } from '../shared/restaurant-model';

import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurant: Observable<Restaurant[]>;
  content: string;

  constructor(private restaurantService: RestaurantService,private router: Router) { }

  ngOnInit() {
    // this.notes = this.noteService.getData()
    this.restaurant = this.restaurantService.getSnapshot();
  }
rederection()
{
  this.router.navigate(['/add-restaurant']);
}
  

}

