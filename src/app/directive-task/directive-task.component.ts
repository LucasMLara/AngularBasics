import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css'],
})
export class DirectiveTaskComponent {
  showSettingsOnScreen: boolean = false;
  howManyTimesButtonWasClicked: number = 0;
  log = [];

  changeStyle(number: number) {
    return number >= 4;
  }

  displaySettings() {
    this.showSettingsOnScreen = !this.showSettingsOnScreen;
    this.howManyTimesButtonWasClicked = this.howManyTimesButtonWasClicked + 1;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
