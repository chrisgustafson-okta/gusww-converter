import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Distance } from '../classes/distance';
@Component({
  selector: 'app-distance-convert',
  templateUrl: './distance-convert.component.html',
  styleUrls: ['./distance-convert.component.sass']
})
export class DistanceConvertComponent implements OnInit {

  model = new Distance(0,0,"FeetToMeters");

  constructor() { }

  ngOnInit(): void {
  }

}
