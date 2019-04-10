import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {
  clicky = [];
  nothing = true;
  status = 'offline'

  constructor() { }

  ngOnInit() {
  }

  details () {

    this.clicky.push(this.clicky.length + 1);
    this.nothing = false;

  }
  reset() {
    this.clicky = [];
    this.nothing = true;
  }




}
