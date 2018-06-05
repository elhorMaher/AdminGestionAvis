import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './ui/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { AuthGuard } from './core/auth.guard';
import { CoreModule } from './core/core.module';
import { RestaurantFormComponent } from './restaurant/restaurant-form/restaurant-form.component';

const routes: Routes = [
  { path: '', component: ReadmePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'restaurant', component: RestaurantListComponent,  canActivate: [AuthGuard] },
{ path: 'add-restaurant', component: RestaurantFormComponent,  canActivate: [AuthGuard] },
  // uploads are lazy loaded
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
