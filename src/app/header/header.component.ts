import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected: string;
  translation_selected = false;
  isAuth: boolean;
  isAdmin: boolean;
  admins: any[];
  adminSubscription: Subscription;
  constructor(private authService: AuthService,
              private router: Router) {
   }

  ngOnInit(): void {
    this.adminSubscription = this.authService.adminSubject.subscribe(
      (admins: any[]) => {
        this.admins = admins;
      }
    );
    this.authService.getAdmins();
    this.authService.emitAdminSubject();
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.isAuth = Boolean(user);
        this.admins.forEach(element => {
          if(user.email == this.admins[element].email){
            this.isAdmin = true;
          }
        });
      }
    );
  }

  onSelect(name: string){
    if(this.translation_selected && name === "language"){
      this.selected= null;
    }else{
      this.selected= name;
    }
  }

  onSelectTranslation(){
    this.translation_selected = !this.translation_selected;
  }

  onLogOut(){
    this.router.navigate(['/home']);
    this.authService.signOutUser();
  }



}
