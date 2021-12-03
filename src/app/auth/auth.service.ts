import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; 
import { Subject } from 'rxjs';
import { User } from '../profile/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminSubject = new Subject<any[]>();
  private admins = [];

  constructor() { 
  }

  emitAdminSubject(){
    this.adminSubject.next(this.admins.slice());
  }

  addAdmin(email: string){
    this.admins.push(email);
    this.saveAdmin();
    this.emitAdminSubject();
  }

  saveAdmin(){
    firebase.database().ref('/admins').set(this.admins);
  }

  getAdmins(){
    firebase.database().ref('/admins')
      .on('value', (data) => {
        this.admins = data.val() ? data.val(): [];
        this.emitAdminSubject();
      });
  }

  async createNewUser(email: string, password: string){
    await firebase.auth().createUserWithEmailAndPassword(email,password);
  }

  async signInUser(email: string, password: string) {
    await firebase.auth().signInWithEmailAndPassword(email,password);
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}
