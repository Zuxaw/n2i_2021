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
    "es",
    "de",
    "cs",
    "ja",
    "zh-cn",
    "ru",
    "pt",
    "pl",
    "vi",
    "th",
    "tr",
    "ro",
    "it",
    "el",
    "he",
    "ko",
    "nl",
    "ar-EG"
  ]

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
