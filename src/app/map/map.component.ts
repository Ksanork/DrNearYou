import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    lat = 51.1078852;
    lng = 17.0385376;
    icon = 'assets/icons/scanmed.png';

    constructor() {
        navigator.geolocation.getCurrentPosition(position => {
            this.lng = position.coords.longitude;
            this.lat = position.coords.latitude;
        });
    }

    ngOnInit() {
    }

}
