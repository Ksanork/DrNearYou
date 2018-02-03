import {Component, OnInit} from '@angular/core';
import {Clinic, Doctor, Registration} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat = 51.1078852;
  lng = 17.0385376;
  doctors: Doctor[] = [
    {id: 1, firstname: 'Jan', lastname: 'Kowalski'},
    {id: 2, firstname: 'Adam', lastname: 'Nowak'},
    {id: 3, firstname: 'Kamil', lastname: 'Redbull'},
    {id: 4, firstname: 'Bożydar', lastname: 'Redbull'},
    {id: 5, firstname: 'Krystyna', lastname: 'Redbull'},
    {id: 6, firstname: 'Halina', lastname: 'Redbull'},
    {id: 7, firstname: 'Grzegorz', lastname: 'Redbull'},
    {id: 8, firstname: 'Rozalia', lastname: 'Redbull'},
    {id: 9, firstname: 'Krzysztof', lastname: 'Redbull'},
    {id: 10, firstname: 'Michalina', lastname: 'Redbull'}
  ];
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
    {id: 1, clinic: this.clinics[0], doctor: this.doctors[0], date: new Date(new Date().getTime() + 10 * 60000)},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[1], date: new Date(new Date().getTime() + 30 * 60000)},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[2], date: new Date(new Date().getTime() + 30 * 60000)},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[3], date: new Date(new Date().getTime() + 30 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[4], date: new Date(new Date().getTime() + 10 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[5], date: new Date(new Date().getTime() + 10 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[6], date: new Date(new Date().getTime() + 10 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[7], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[7], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[6], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[5], date: new Date(new Date().getTime() + 240 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[4], date: new Date(new Date().getTime() + 240 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[3], date: new Date(new Date().getTime() + 240 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[4], date: new Date(new Date().getTime() + 240 * 60000)},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[5], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[6], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[0], doctor: this.doctors[8], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[0], doctor: this.doctors[7], date: new Date(new Date().getTime() + 360 * 60000)},
    {id: 2, clinic: this.clinics[0], doctor: this.doctors[6], date: new Date(new Date().getTime() + 360 * 60000)},
    {id: 2, clinic: this.clinics[0], doctor: this.doctors[5], date: new Date(new Date().getTime() + 360 * 60000)},
    {id: 2, clinic: this.clinics[0], doctor: this.doctors[2], date: new Date(new Date().getTime() + 360 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[3], date: new Date(new Date().getTime() + 560 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[4], date: new Date(new Date().getTime() + 360 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[6], date: new Date(new Date().getTime() + 360 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[7], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[7], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[9], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[9], date: new Date(new Date().getTime() + 120 * 60000)},
    {id: 2, clinic: this.clinics[0], doctor: this.doctors[9], date: new Date(new Date().getTime() + 400 * 60000)},
    {id: 2, clinic: this.clinics[1], doctor: this.doctors[3], date: new Date(new Date().getTime() + 400 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[6], date: new Date(new Date().getTime() + 400 * 60000)},
    {id: 2, clinic: this.clinics[2], doctor: this.doctors[5], date: new Date(new Date().getTime() + 400 * 60000)},
    {id: 2, clinic: this.clinics[3], doctor: this.doctors[1], date: new Date(new Date().getTime() + 400 * 60000)}
  ];


  ngOnInit(): void {
    this.registrations = this.registrations.sort((b, a) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0);
  }

}
