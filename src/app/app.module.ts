import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {SuggestWindowComponent} from './suggest-window/suggest-window.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        DoctorsComponent,
        RegisterFormComponent,
        SuggestWindowComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCEkA0wQsUI1iY8eGjkWmuSBBifgFgn838'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
