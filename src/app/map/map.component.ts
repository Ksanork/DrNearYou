import {Component, OnInit} from '@angular/core';
import {Clinic, Doctor} from '../models';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    lat = 51.1078852;
    lng = 17.0385376;


    DOCTORS: Doctor[] = [{id: 1, firstname: 'Jan', secondname: 'Kowalski', termin: new Date()}];
    CLINICS: Clinic[] = [
        {
            id: 1,
            name: 'Scanmed',
            logo: 'assets/icons/scanmed.png',
            address: 'Rynek 3',
            latitude: 51.1078852,
            longitude: 17.0385376,
            doctors: this.DOCTORS
        },
        {
            id: 2,
            name: 'Klinika 2',
            logo: 'assets/icons/scanmed.png',
            address: 'Rynek 3',
            latitude: 51.11276390719499,
            longitude: 17.018980979919434,
            doctors: this.DOCTORS
        }
    ];




    constructor() {
        navigator.geolocation.getCurrentPosition(position => {
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;
        });
    }

    ngOnInit() {
    }

}
