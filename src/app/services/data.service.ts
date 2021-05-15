import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Product } from '../home/prod';
@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    getProducts$() {
        return this.http.get('/assets/data.json');
    }
}
