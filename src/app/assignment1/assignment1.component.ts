import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
})
export class Assignment1Component {
  userName = '';
  allowAddUserName = false;
  userNameList = [];

  onUserNameChanged(event: Event) {
    if (this.userName != '') {
      this.allowAddUserName = true;
    }
  }

  onClickAddUserName() {
    this.userNameList.push(this.userName);
    this.userName = '';
    this.allowAddUserName = false;
  }
}
