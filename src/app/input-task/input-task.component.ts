import { Component } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css'],
})
export class InputTaskComponent {
  userName = '';

  checkString() {
    return this.userName === '' ? true : false;
  }

  resetInput() {
    this.userName = '';
  }

  updateName(e: { target: HTMLInputElement }) {
    this.userName = e.target.value;
  }
}
