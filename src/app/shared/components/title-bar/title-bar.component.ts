import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  selectedView: string = 'card';

  @Input() title: string = "";
  @Input() description?: string = "";
  @Output() onGridViewChange = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  changeView(mode: string) {
    this.selectedView = mode;
    this.onGridViewChange.emit(this.selectedView);
  }

}
