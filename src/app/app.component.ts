import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Business } from './Business';
import { Category } from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  businesses: Business[];
  categories: Category[];
  

  constructor(private _firebaseService: FirebaseService) {

  }
  ngOnInit() {
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
      // console.log(businesses);
    });
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
      //console.log(categories);
    });

  }
}
