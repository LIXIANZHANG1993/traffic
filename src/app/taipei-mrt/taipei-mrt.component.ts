import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taipei-mrt',
  templateUrl: './taipei-mrt.component.html',
  styleUrls: ['./taipei-mrt.component.css'],
})
export class TaipeiMRTComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isChoose = true;

  changeChoose() {
    this.isChoose = !this.isChoose;
  }
}
