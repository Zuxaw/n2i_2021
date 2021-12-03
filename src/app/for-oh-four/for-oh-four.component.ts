import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-oh-four',
  templateUrl: './for-oh-four.component.html',
  styleUrls: ['./for-oh-four.component.scss']

})
export class ForOhFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  


  clickToCountEvent() {
    let count = 0;

    const clickToCount = document.createElement('button');
    clickToCount.addEventListener('click', handleClick);
    updateButtonText();


    function handleClick() {
      count += 1;
      updateButtonText();
    }

    function updateButtonText() {
      clickToCount.textContent = 'Ive been clicked ${count} times';

    }

    if (count = 3) {
      window.open('https://giphy.com/gifs/fail-boat-spped-boad-qhoABJOROS9kQ/fullscreen', '_blank').focus();
    }

    return clickToCount;
  }
}
