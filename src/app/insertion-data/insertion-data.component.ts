import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Boat } from '../data-models/boat.model';
import { DataService } from '../service/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-insertion-data',
  templateUrl: './insertion-data.component.html',
  styleUrls: ['./insertion-data.component.scss']
})
export class InsertionDataComponent implements OnInit {
  @Input() mod: string;
  admins: any[];
  adminSubscription: Subscription;
  insertForm: FormGroup;

  constructor(private authService: AuthService,private dataService: DataService,private router: Router) { }
  
  ngOnInit(): void {
    this.adminSubscription = this.authService.adminSubject.subscribe(
      (admins: any[]) => {
        this.admins = admins;
      }
    );
    this.authService.emitAdminSubject();
  }

  onSubmit(form: NgForm){
    const boat: Boat = {
      id: uuidv4(),
      brand: form.value["brand"],
      reference: form.value["ref"],
      capacity: form.value["capacity"]
    };
    this.dataService.addBoat(boat);
  }

  // onAddAdmin(){
  //   this.authService.addAdmin("admin@stks.com");
  // }

}
