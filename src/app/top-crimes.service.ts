import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Crime } from './crime';

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {

  constructor(private http:HttpClient) { }

  getTopCrimes(){  
    return this.http.get<Crime[]>('http://nflarrest.com/api/v1/crime')
  }

}
