import {Component} from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
    selector: 'main-app',
    animations: [ routerTransition ],
    template: `
        <h1 class="title">The Game</h1>
        <nav>
            <a routerLink="/home" routerLinkActive="active">Crisis Center</a>
            <a routerLink="/sfgsd" routerLinkActive="active">404</a>
            <a routerLink="/sdfgs" routerLinkActive="active">404</a>
            <a routerLink="/sdfgsdgf" routerLinkActive="active">404</a>
        </nav>
        <main [@routerTransition]="getState(o)">
            <router-outlet #o="outlet"></router-outlet>
        </main> 
    `
})
export class AppComponent {
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
