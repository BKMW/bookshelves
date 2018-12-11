import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDhFFf7qulVJn1srNlexbqnJehQDmpj3Jc",
      authDomain: "bookshelves-6b906.firebaseapp.com",
      databaseURL: "https://bookshelves-6b906.firebaseio.com",
      projectId: "bookshelves-6b906",
      storageBucket: "bookshelves-6b906.appspot.com",
      messagingSenderId: "398881130447"
    }
    firebase.initializeApp(config);
  }
}
