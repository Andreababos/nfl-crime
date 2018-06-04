import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TopTeamsService {

  constructor(private http:HttpClient) { }

  getTopTeams(crime){  
    return this.http.get<Team[]>('http://nflarrest.com/api/v1/crime/topTeams/'+crime)
  }

}
