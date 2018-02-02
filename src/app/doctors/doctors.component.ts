import {Component, Input, OnInit} from '@angular/core';
import {Doctor, Registration} from '../models';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  @Input() registrations: Array<Registration>;

  constructor() { }

  ngOnInit() {
  }

  moveToDoctor(doctor: Doctor) {
    console.log('move to doctor' + doctor.secondname);
  }
}
