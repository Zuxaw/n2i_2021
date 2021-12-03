import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import {TranslateService} from '@ngx-translate/core';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService){
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDuu5-gvuUYln2tt6JtRmphb4evb3D6tcA",
      authDomain: "n2i-2021-a888e.firebaseapp.com",
      projectId: "n2i-2021-a888e",
      storageBucket: "n2i-2021-a888e.appspot.com",
      messagingSenderId: "145062928126",
      appId: "1:145062928126:web:66c6c4969d522e2717cfaf",
      measurementId: "G-9LNBDN6QZ7",
      databaseURL: "https://n2i-2021-a888e-default-rtdb.europe-west1.firebasedatabase.app/"
    };



    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-GB');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
