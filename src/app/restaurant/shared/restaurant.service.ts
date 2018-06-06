import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Restaurant } from './restaurant-model';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { SrvRecord } from 'dns';

interface NewResterant {
  nom:string;
  description: string;
  
}

@Injectable()
export class RestaurantService {


  restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurantDocument:   AngularFirestoreDocument<Restaurant>;




  constructor(private afs: AngularFirestore,public auth: AuthService) {
    this.restaurantsCollection = this.afs.collection('restaurant');

  }

  getData(): Observable<Restaurant[]> {
    return this.restaurantsCollection.valueChanges();
  }

  getSnapshot(): Observable<Restaurant[]> {
    // ['added', 'modified', 'removed']
    return this.restaurantsCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Restaurant;
        return { nom:data.nom,id: a.payload.doc.id, description: data.description,  };
      });
    });
  }

  getRestaurant(id: string) {
    console.log(this.auth.user.map);
    return this.afs.doc<Restaurant>(`restaurant/${id}`);
    
  }

  create(nomRestaurant: string,desc : string,alt: string,long:string) {
    /*var  uid =JSON.stringify(user.displayName);;*/
    
    const restaurant = {
      nom: nomRestaurant ,
      description: desc,
      altitude : alt,
      longitude:long,
      
    };
    console.log("ajout effectuer");
    return this.restaurantsCollection.add(restaurant);
  }

  updateRestaurant(id: string, data: Partial<Restaurant>) {
    return this.getRestaurant(id).update(data);
  }

  deleteRestaurant(id: string) {
    return this.getRestaurant(id).delete();
  }
}
