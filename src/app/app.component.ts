import {Component, OnInit} from '@angular/core';
import {Clinic, Doctor, Registration} from './models';
import {DataService} from './services/service';
import {DoctorsService} from './services/doctors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat = 51.1078852;
  lng = 17.0385376;
  constructor(
    private _doctorsService: DoctorsService
) {}

   doctors: Doctor[] = []
  // doctors: Doctor[] = [{id: 1, firstname: 'Jan', secondname: 'Kowalski'}];
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

  ngOnInit(): void {
    this.getAllDoctors();
  }
  public getAllDoctors(): void {
    this._doctorsService
        .getDoctors()
        .subscribe((data: Doctor[]) => this.doctors = data);
  }
}

