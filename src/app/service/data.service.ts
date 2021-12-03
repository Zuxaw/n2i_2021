import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

import { Lifeguard } from '../data-models/lifeguard.model';
import { Boat } from '../data-models/boat.model';
import { People } from '../data-models/people.model';
import { Event } from '../data-models/event.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private lifeguards: Lifeguard[];
  private boats: Boat[];
  private people: People[];
  private events: Event[];

  lifeguardSubject = new Subject<Lifeguard[]>();
  boatSubject = new Subject<Boat[]>();
  peopleSubject = new Subject<People[]>();
  eventSubject = new Subject<Event[]>();

  constructor() {}

  getLifeguards(): void {
    firebase.database().ref('/lifeguards').on('value', (data: firebase.database.DataSnapshot) => {
        this.lifeguards = data.val() ? data.val() : [];
        this.emitLifeguardSubject();
      });
  }

  addLifeguard(lifeguard: Lifeguard): void {
    this.lifeguards.push(lifeguard);
    this.saveLifeguards();
    this.emitLifeguardSubject();
  }

  editLifeguard(lifeguard: Lifeguard): void {
    const lifeguardIndexToEdit = this.lifeguards.findIndex(
      (lifeguardEl: Lifeguard) => {
        if (lifeguardEl === lifeguard) {
          return true;
        }
      }
    );
    this.lifeguards[lifeguardIndexToEdit] = lifeguard;
    this.saveLifeguards();
    this.emitLifeguardSubject();
  }

  removeLifeguard(lifeguard: Lifeguard): void {
    const lifeguardIndexToRemove = this.lifeguards.findIndex(
      (lifeguardEl: Lifeguard) => {
        if (lifeguardEl === lifeguard) {
          return true;
        }
      }
    );
    this.lifeguards.splice(lifeguardIndexToRemove, 1);
    this.saveLifeguards();
    this.emitLifeguardSubject();
  }

  saveLifeguards(): void {
    firebase.database().ref('/lifeguards').set(this.lifeguards);
  }

  emitLifeguardSubject(): void {
    this.lifeguardSubject.next(this.lifeguards);
  }

  getBoats(): void {
    firebase.database().ref('/boats').on('value', (data: firebase.database.DataSnapshot) => {
        this.boats = data.val() ? data.val() : [];
        this.emitBoatSubject();
      });
  }

  addBoat(boat: Boat): void {
    this.boats.push(boat);
    this.saveBoats();
    this.emitBoatSubject();
  }

  editBoats(boat: Boat): void {
    const boatIndexToEdit = this.boats.findIndex(
      (boatEl: Boat) => {
        if (boatEl === boat) {
          return true;
        }
      }
    );
    this.boats[boatIndexToEdit] = boat;
    this.saveBoats();
    this.emitBoatSubject();
  }

  removeBoat(boat: Boat): void {
    const boatIndexToRemove = this.boats.findIndex(
      (boatEl: Boat) => {
        if (boatEl === boat) {
          return true;
        }
      }
    );
    this.boats.splice(boatIndexToRemove, 1);
    this.saveBoats();
    this.emitBoatSubject();
  }

  saveBoats(): void {
    firebase.database().ref('/boats').set(this.boats);
  }

  emitBoatSubject(): void {
    this.boatSubject.next(this.boats);
  }

  getPeople(): void {
    firebase.database().ref('/people').on('value', (data: firebase.database.DataSnapshot) => {
        this.people = data.val() ? data.val() : [];
        this.emitPeopleSubject();
      });
  }

  addPerson(person: People): void {
    this.people.push(person);
    this.savePeople();
    this.emitPeopleSubject();
  }

  editPerson(person: People): void {
    const personIndexToEdit = this.people.findIndex(
      (personEl: People) => {
        if (personEl === person) {
          return true;
        }
      }
    );
    this.people[personIndexToEdit] = person;
    this.savePeople();
    this.emitPeopleSubject();
  }

  removePerson(person: People): void {
    const personIndexToRemove = this.people.findIndex(
      (personEl: People) => {
        if (personEl === person) {
          return true;
        }
      }
    );
    this.people.splice(personIndexToRemove, 1);
    this.savePeople();
    this.emitPeopleSubject();
  }

  savePeople(): void {
    firebase.database().ref('/people').set(this.people);
  }

  emitPeopleSubject(): void {
    this.peopleSubject.next(this.people);
  }

  getEvents(): void {
    firebase.database().ref('/events').on('value', (data: firebase.database.DataSnapshot) => {
        this.events = data.val() ? data.val() : [];
        this.emitEventSubject();
      });
  }

  addEvent(event: Event): void {
    this.events.push(event);
    this.saveEvents();
    this.emitEventSubject();
  }

  editEvent(event: Event): void {
    const eventIndexToEdit = this.events.findIndex(
      (eventEl: Event) => {
        if (eventEl === event) {
          return true;
        }
      }
    );
    this.events[eventIndexToEdit] = event;
    this.saveEvents();
    this.emitEventSubject();
  }

  removeEvent(event: Event): void {
    const eventIndexToRemove = this.events.findIndex(
      (eventEl: Event) => {
        if (eventEl === event) {
          return true;
        }
      }
    );
    this.events.splice(eventIndexToRemove, 1);
    this.saveEvents();
    this.emitEventSubject();
  }

  saveEvents(): void {
    firebase.database().ref('/events').set(this.events);
  }

  emitEventSubject(): void {
    this.eventSubject.next(this.events);
  }
}
