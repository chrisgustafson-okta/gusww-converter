import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent implements OnInit {
  isNavbarCollapsed=true;
  active = 1;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
