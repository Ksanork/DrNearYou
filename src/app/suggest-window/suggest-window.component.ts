import {Component, OnInit, Input} from '@angular/core';
import {Clinic, Doctor, Registration} from '../models';

import {DialogService} from 'ng2-bootstrap-modal';
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-suggest-window',
  templateUrl: './suggest-window.component.html',
  styleUrls: ['./suggest-window.component.css']
})
export class SuggestWindowComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() clinics: Array<Clinic>;
  @Input() registrations: Array<Registration>;
  clinicFound:string;
  clinicName:string;
  clinicStreet:string;
  doctorName:string;
  hour:number;
  minutes:number;
  day:number;
  month:number;
  year:number;
  logo:string;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.clinicFound = "We have found clinic for you";
    this.clinicName = this.clinics[0].name;
    this.clinicStreet = this.clinics[0].address;
    this.doctorName = this.clinics[0].doctors[0].firstname +" "+ this.clinics[0].doctors[0].lastname;
    this.hour = this.registrations[0].date.getUTCHours();
    this.minutes = this.registrations[0].date.getUTCMinutes();
    this.day = this.registrations[0].date.getUTCDay();
    this.month = this.registrations[0].date.getUTCMonth();
    this.year = this.registrations[0].date.getUTCFullYear();
    this.logo = this.clinics[0].logo;

    if(this.lat==0 || this.lng == 0){
       this.clinicStreet  = this.doctorName = "";
       this.clinicName = "Ni ma lokacji"
    }

  }

  showConfirm(registration: Registration) {
    console.log('test');
    this.dialogService.addDialog(RegisterFormComponent, {
      registration: this.registrations[0]
    });
  }

  moveToDoctor(clinic: Clinic) {
    console.log(clinic);
  }

}
