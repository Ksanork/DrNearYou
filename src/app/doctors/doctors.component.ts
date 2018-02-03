import {Component, Input, OnInit} from '@angular/core';
import {Clinic, Registration} from '../models';
import {DialogService} from 'ng2-bootstrap-modal';
import {RegisterFormComponent} from '../register-form/register-form.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  @Input() registrations: Array<Registration>;

  constructor(private dialogService: DialogService) {
  }

  showConfirm(registration: Registration) {
    this.dialogService.addDialog(RegisterFormComponent, {
      registration: registration
    });
  }

  ngOnInit() {
  }

  moveToDoctor(clinic: Clinic) {
    console.log(clinic);
  }
}
