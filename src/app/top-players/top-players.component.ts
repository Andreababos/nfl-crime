import { Component, OnInit } from '@angular/core';
import { TopPlayersService } from '../top-players-for-crime.service';
import { Player } from '../player';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  public players: Player[] = [];
  public crime: string ='theft'
  constructor( private topPlayersService : TopPlayersService) { }

  ngOnInit() {
    this.loadPlayers(this.crime);
  }

  public loadPlayers(crime){
    this.topPlayersService.getTopPlayers(crime).subscribe(data => this.players = data);
  }
}
