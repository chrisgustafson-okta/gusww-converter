import { Component,  Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button ngbButton class="btn-primary" (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
    
      <button ngbButton class="btn-primary" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styleUrls: ['./login-button.component.sass']
})
export class LoginButtonComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(): void {
  }

}
