import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///// Start FireStarter

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module';

// Feature Modules
import { ItemModule } from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module';
///// End FireStarter

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import {RatingModule} from "ngx-rating";
import { StarRatingModule } from 'angular-star-rating';
import { RestaurantFormComponent } from './restaurant/restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    RestaurantListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ItemModule,
    UiModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    StarRatingModule
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
