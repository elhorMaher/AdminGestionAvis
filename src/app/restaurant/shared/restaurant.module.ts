import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { RestaurantService } from './restaurant.service';

import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from '../restaurant-detail/restaurant-detail.component';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantFormComponent,
  ],
  providers: [RestaurantService],
})
export class RestaurantModule { }
