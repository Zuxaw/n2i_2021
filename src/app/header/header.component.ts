import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected: string;
  translation_selected = false;
  isAuth: boolean;
  constructor(private authService: AuthService,
              private router: Router) {
   }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) =>  this.isAuth = Boolean(user)
    );
  }

  onSelect(name: string){
    this.selected= name;
  }

  onSelectTranslation(){
    this.translation_selected = !this.translation_selected;
  }

  onLogOut(){
    this.router.navigate(['/home']);
    this.authService.signOutUser();
  }



}
