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
      apiKey: "AIzaSyAkuJ5TH-HMZiQvIf6CDlAhfTDi28TyTGc",
      authDomain: "stksmessenger.firebaseapp.com",
      projectId: "stksmessenger",
      storageBucket: "stksmessenger.appspot.com",
      messagingSenderId: "538513952885",
      appId: "1:538513952885:web:732cc8292492924b5ba83c",
      measurementId: "G-49L9RG606J"
    };



    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-UK');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr-FR');

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
