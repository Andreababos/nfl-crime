import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class TopPlayersService {

  constructor(private http:HttpClient) { }

  getTopPlayers(crime){  
    return this.http.get<Player[]>('http://nflarrest.com/api/v1/crime/topPlayers/'+crime)
  }

}
