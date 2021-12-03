import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  selected = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.selected = !this.selected
  }

}
