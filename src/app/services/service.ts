import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Configuration} from '../app.constants';
import {Observable} from 'rxjs/Observable';
import {Doctor} from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl + '/doctors';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getAll = (): Observable<Doctor[]> => {
        //noinspection TypeScriptValidateTypes
        return this._http.get(this.actionUrl + '/doctors')
            .map((response: Response) => <Doctor[]>response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
