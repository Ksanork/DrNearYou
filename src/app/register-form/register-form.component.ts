import {Component} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {Registration} from '../models';

export interface RegisterForm {
  firstname: string;
  lastname: string;
  pesel: number;
  registration: Registration;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent extends DialogComponent<RegisterForm, boolean> implements RegisterForm {
  firstname: string;
  lastname: string;
  pesel: number;
  registration: Registration;
  submit = false;
  getResponse = false;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  submitForm() {
    this.submit = true;
  }
}
