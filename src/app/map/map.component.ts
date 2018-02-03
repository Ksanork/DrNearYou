import {Component, Input, OnInit} from '@angular/core';
import {Clinic, Registration} from '../models';
import {DialogService} from 'ng2-bootstrap-modal';
import {ModalWithDoctorsComponent} from '../modal-with-doctors/modal-with-doctors.component';
import {google} from '@agm/core/services/google-maps-types';
import {GoogleMapsAPIWrapper} from '@agm/core';

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

  private origin: { lat: 4.333, lng: -1.2222 };
  private destination: { lat: 22.311, lng: -0.123 };

  constructor(private dialogService: DialogService, private gmapsApi: GoogleMapsAPIWrapper) {
    navigator.geolocation.getCurrentPosition(position => {
      this.lng = position.coords.longitude;
      this.lat = position.coords.latitude;
    });
  }

  ngOnInit(): void {
    this.renderDirections();
  }

  renderDirections() {
    console.log('map');
    this.gmapsApi.getNativeMap()
        .then(map => {
          const directionsService = new google.maps.DirectionsService;
          const directionsDisplay = new google.maps.DirectionsRenderer;
          directionsDisplay.setMap(map);

          console.log('map1');
          directionsService.route({
            origin:  this.origin,
            destination: this.destination,
            waypoints: [],
            optimizeWaypoints: true,
            // waypoints: this.waypoints,
            // optimizeWaypoints: this.optimizeWaypoints,
            travelMode: 'DRIVING',
          }, (response, status) => {
            if (status === 'OK') {
              console.log('okkkk');
              directionsDisplay.setDirections(response);
              directionsDisplay.setOptions( { suppressMarkers: true } );
              const route = response.routes[0];
              // this.mapService.addMarkersToMap(route, map);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        });
  }

  showDoctors(clinic: Clinic) {
    this.dialogService.addDialog(ModalWithDoctorsComponent, {
      registrations: this.registrations,
      clinic: clinic
  });
  }
}
