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
import { RestaurantModule } from './restaurant/shared/restaurant.module';
///// End FireStarter

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { RestaurantFormComponent } from './restaurant/restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuDetailComponent,
    MenuFormComponent,
    MenuListComponent,
    
    
    
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
    RestaurantModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
