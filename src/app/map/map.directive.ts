import {Directive, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {google} from '@agm/core/services/google-maps-types';

export class DirectionsMapDirective implements OnInit {
    // @Input()
    // private waypoints: Waypoint[];
    private origin: { longitude: 4.333, lattitude: -1.2222 };
    private destination: { longitude: 22.311, lattitude: -0.123 };
    // @Input()
    // private optimizeWaypoints: boolean;
    @Input()
    private travelMode: string;

    constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

    ngOnInit(): void {
        this.renderDirections();
    }

    renderDirections() {
        this.gmapsApi.getNativeMap()
            .then(map => {
                const directionsService = new google.maps.DirectionsService;
                const directionsDisplay = new google.maps.DirectionsRenderer;
                directionsDisplay.setMap(map);
                directionsService.route({
                    origin:  this.origin,
                    destination: this.destination,
                    // waypoints: this.waypoints,
                    // optimizeWaypoints: this.optimizeWaypoints,
                    travelMode: 'DRIVING'
                }, (response, status) => {
                    if (status === 'OK') {
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
}
