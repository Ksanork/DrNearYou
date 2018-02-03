import {Component, Input, OnInit} from '@angular/core';
import {Clinic, Registration} from '../models';
import {DialogService} from 'ng2-bootstrap-modal';
import {ModalWithDoctorsComponent} from '../modal-with-doctors/modal-with-doctors.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() clinics: Array<Clinic>;
  @Input() registrations: Array<Registration>;

  constructor(private dialogService: DialogService) {
    navigator.geolocation.getCurrentPosition(position => {
      this.lng = position.coords.longitude;
      this.lat = position.coords.latitude;
    });
  }

  ngOnInit() {}

  showDoctors(clinic: Clinic) {
    this.dialogService.addDialog(ModalWithDoctorsComponent, {
      registrations: this.registrations,
      clinic: clinic
  });
  }

}
