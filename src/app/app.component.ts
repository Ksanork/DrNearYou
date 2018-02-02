import {Component} from '@angular/core';
import {Clinic, Doctor, Registration} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat = 51.1078852;
  lng = 17.0385376;
  doctors: Doctor[] = [{id: 1, firstname: 'Jan', lastname: 'Kowalski'}];
  clinics: Clinic[] = [
    {
      id: 1,
      name: 'Scanmed',
      logo: 'assets/icons/scanmed.png',
      address: 'Rynek 3',
      latitude: 51.1078852,
      longitude: 17.0385376,
      doctors: this.doctors
    },
    {
      id: 2,
      name: 'Klinika 2',
      logo: 'assets/icons/scanmed.png',
      address: 'Rynek 3',
      latitude: 51.11276390719499,
      longitude: 17.018980979919434,
      doctors: this.doctors
    }
  ];
  registrations: Registration[] = [
    {id: 1, clinic: this.clinics[0], doctor: this.doctors[0], date: new Date()},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[0], date: new Date()}];
}
