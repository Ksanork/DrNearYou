import {Injectable} from '@angular/core';
import {DataService} from './service';
import {Doctor} from '../models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DoctorsService {

    constructor(private dataService: DataService) { }

    public getDoctors(): Observable<Doctor[]> {
        // Todo: send the message _after_ fetching the heroes
        // this.messageService.add('HeroService: fetched heroes');
        return this.dataService.getAll();
    }
}
