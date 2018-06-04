import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CrimeTime } from './crime-time';

@Injectable({
  providedIn: 'root'
})
export class CrimeTimelineService {

  constructor(private http:HttpClient) { }

  getCrimeTimeline(crime){  
    return this.http.get<CrimeTime[]>('http://nflarrest.com/api/v1/crime/timeline/'+crime)
  }

}
