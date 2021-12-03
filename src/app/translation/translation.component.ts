import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  languages = [] = [
    "fr",
    "en-GB",
    "es"
  ]

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
