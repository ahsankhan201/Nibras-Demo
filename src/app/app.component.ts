import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'Nibras';
  sidebarToggle: boolean = true;

  constructor() { }

  ngAfterContentInit() {
    this.adjustWindowSize()
  }

  adjustWindowSize() {
    this.sidebarToggle = window.innerWidth <= 768 ? false : true;
  }
}
