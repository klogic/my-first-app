import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  // styleUrl: './assignment2.component.css',
  styles: [
    `
      .hidden {
        display: none;
      }
    `,
  ],
})
export class Assignment2Component {
  click = 0;
  clicks = [0];
  onDisplayBtnClicked() {
    this.click++;
    this.clicks.push(this.click);
  }
}
