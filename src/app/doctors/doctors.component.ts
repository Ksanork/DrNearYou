import {Component, Input, OnInit} from '@angular/core';
import {Clinic, Doctor, Registration} from '../models';

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

  moveToDoctor(clinic: Clinic) {
    console.log(clinic);
  }
}
