import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../shared/restaurant.service';

import { Restaurant } from '../shared/restaurant-model';

import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})

export class RestaurantFormComponent implements OnInit {
  restaurants : Observable<Restaurant[]>;
    nomRestaurant:string;
  descRestaurant:string;
  long:string;
  alt:string;
  userKey:any;  
  constructor(private restaurantService: RestaurantService,private router: Router) {  }

  ngOnInit() {
    this.restaurants = this.restaurantService.getSnapshot();
  }
 
  createRestaurant() {
    console.log("ajout commancais");
    this.restaurantService.create(this.nomRestaurant,this.descRestaurant,this.alt,this.long);
    this.router.navigate(['/restaurant']);
  }


}
