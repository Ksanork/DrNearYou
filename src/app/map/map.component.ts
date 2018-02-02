import {Component, Input, OnInit} from '@angular/core';
import {Clinic} from '../models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.1078852;
  lng = 17.0385376;
  @Input() clinics: Array<Clinic>;

  constructor() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lng = position.coords.longitude;
      this.lat = position.coords.latitude;
    });
  }

  ngOnInit() {
  }

}
