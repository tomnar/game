/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
*/
import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `
      <h1 class="title">Angular Router</h1>
      <nav>
          <a routerLink="/home" routerLinkActive="active">Crisis Center</a>
          <a routerLink="/sfgsd" routerLinkActive="active">404</a>
          <a routerLink="/sdfgs" routerLinkActive="active">404</a>
          <a routerLink="/sdfgsdgf" routerLinkActive="active">404</a>
      </nav>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
