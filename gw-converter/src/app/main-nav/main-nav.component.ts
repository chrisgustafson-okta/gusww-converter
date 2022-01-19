import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent implements OnInit {
  isNavbarCollapsed=true;
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
