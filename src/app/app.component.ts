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
      point: 'assets/icons/scanmed-point.png',
      address: 'Rynek 3',
      latitude: 51.1078852,
      longitude: 17.0385376,
      doctors: this.doctors
    },
    {
      id: 2,
      name: 'Medicover',
      logo: 'assets/icons/medicover.png',
      point: 'assets/icons/medicover-point.png',
      address: 'Powstańców Śląskich 9, 53-332 Wrocław, Poland',
      latitude: 51.098,
      longitude: 17.024332,
      doctors: this.doctors
    },
    {
      id: 3,
      name: 'Medicover',
      logo: 'assets/icons/medicover.png',
      point: 'assets/icons/medicover-point.png',
      address: 'Strzegomska 36, 53-611 Wrocław',
      latitude: 51.113012,
      longitude: 17.000391900000068,
      doctors: this.doctors
    },
    {
      id: 4,
      name: 'Luxmed',
      logo: 'assets/icons/luxmed.png',
      point: 'assets/icons/luxmed-point.png',
      address: 'plac Dominikański 3, 50-159 Wrocław',
      latitude: 51.10834879999999,
      longitude: 17.04042819999995,
      doctors: this.doctors
    }
  ];
  registrations: Registration[] = [
    {id: 1, clinic: this.clinics[0], doctor: this.doctors[0], date: new Date()},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[0], date: new Date()}];
}
