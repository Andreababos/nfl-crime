import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams-for-crime.service';
import { Team } from '../team';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {

  constructor(private topTeamsService: TopTeamsService) { }

  public teams: Team[] = [];
  public crime: string = 'theft';

  ngOnInit() {
    this.loadTeams(this.crime);
  }

  public loadTeams(crime){
    this.topTeamsService.getTopTeams(crime).subscribe(data => this.teams = data);
  }
}
