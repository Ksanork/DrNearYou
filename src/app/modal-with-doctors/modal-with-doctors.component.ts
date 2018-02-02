import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {Clinic, Registration} from '../models';


export interface ModalWithDoctor {
  clinic: Clinic;
  registrations: Array<Registration>;
}

@Component({
  selector: 'app-modal-with-doctors',
  templateUrl: './modal-with-doctors.component.html',
  styleUrls: ['./modal-with-doctors.component.css']
})

export class ModalWithDoctorsComponent extends DialogComponent<ModalWithDoctor, boolean> implements OnInit {
  registrations: Array<Registration>;
  clinic: Clinic;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit(): void {
    // get only registrations from that clinic
    this.registrations = this.registrations.filter(s => s.clinic === this.clinic );
  }


}
