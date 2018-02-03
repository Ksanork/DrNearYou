import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DialogService} from 'ng2-bootstrap-modal';


import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {SuggestWindowComponent} from './suggest-window/suggest-window.component';
import {AgmCoreModule} from '@agm/core';
import {HeaderComponent} from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        DoctorsComponent,
        RegisterFormComponent,
        SuggestWindowComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        // HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCEkA0wQsUI1iY8eGjkWmuSBBifgFgn838'
        })
    ],
    // providers: [DataService, DoctorsService, Configuration],
    providers: [DialogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
