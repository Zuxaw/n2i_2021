import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Boat } from '../data-models/boat.model';
import { Lifeguard } from '../data-models/lifeguard.model';
import { People } from '../data-models/people.model';
import { Event } from '../data-models/event.model';
import { DataService } from '../service/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-insertion-data',
  templateUrl: './insertion-data.component.html',
  styleUrls: ['./insertion-data.component.scss']
})
export class InsertionDataComponent implements OnInit {
  @Input() mod: string;
  oldMod?: string;

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

  onSubmit(form: NgForm) {
    switch (this.oldMod) {
    case "boat":
      this.submitBoat(form);
      break;
    case "lifeguard":
      this.submitLifeguard(form);
      break;
    case "people":
      this.submitPeople(form);
      break;
    case "event":
      this.submitEvent(form);
      break;
    default:
      break;
    }
  }

  submitBoat(form: NgForm) {
    const boat: Boat = {
      id: uuidv4(),
      brand: form.value["brand"],
      reference: form.value["ref"],
      capacity: form.value["capacity"]
    };
    this.dataService.addBoat(boat);
  }

  submitLifeguard(form: NgForm) {
    const lifeguard: Lifeguard = {
      id: uuidv4(),
      national_id_card_number: form.value["national-id-card-number"],
      carte_vitale_number: form.value["carte-vitale-number"],
      bnssa_number: form.value["bnssa-number"],
      first_name: form.value["first-name"],
      last_name: form.value["last-name"],
      birth_date: form.value["birth-date"],
      phone_number: form.value["phone-number"],
      email_address: form.value["mail"]
    };
    this.dataService.addLifeguard(lifeguard);
  }

  submitPeople(form: NgForm) {
    const person: People = {
      id: uuidv4(),
      first_name: form.value["first-name"],
      last_name: form.value["last-name"],
      birthdate: form.value["birthdate"],
      birthplace: form.value["birthplace"],
      physical_description: form.value["physical-description"],
      missing_since: form.value["missing-since"],
      found_since: form.value["found-since"]
    };
    this.dataService.addPerson(person);
  }

  submitEvent(form: NgForm) {
    const event: Event = {
      id: uuidv4(),
      date: form.value["event-date"],
      time: form.value["event-time"],
      lifeguards: form.value["lifeguards"],
      identified_people: form.value["identified-people"],
      mission_results: form.value["mission-results"],
      complete_mission_log: form.value["complete-mission-log"]
    };
    this.dataService.addEvent(event);
  }

  // onAddAdmin(){
  //   this.authService.addAdmin("admin@stks.com");
  // }
}
