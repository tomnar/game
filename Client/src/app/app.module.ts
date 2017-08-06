import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './../views/home/home.component';
import {PageNotFoundComponent} from './../views/404/404.component'

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
