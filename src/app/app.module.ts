import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyALiG_4jZmPjKdjOMEkBTNPCeqEPeDAeM0',
  authDomain: 'business-contacts-6f2ad.firebaseapp.com',
  databaseURL: 'https://business-contacts-6f2ad.firebaseio.com',
  storageBucket: 'business-contacts-6f2ad.appspot.com',
  messagingSenderId: '399561603052'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
