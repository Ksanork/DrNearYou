import {Component, OnInit, Input} from '@angular/core';
import {Clinic} from '../models';

@Component({
  selector: 'app-suggest-window',
  templateUrl: './suggest-window.component.html',
  styleUrls: ['./suggest-window.component.css']
})
export class SuggestWindowComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() clinics: Array<Clinic>;
  clinicName = "Przychodnia Ziółko";
  clinicStreet = "Łączności 13/1, Wrocław";
  hour = "15:00";
  doctorName = "Dr. Konrad Fryszkowski";
  constructor() {

  }

  ngOnInit() {
    if(this.lat==0 || this.lng == 0){
       this.clinicStreet =this.hour = this.doctorName = "";
       this.clinicName = "Ni ma lokacji"
    }

  }

}
