import { Component, OnInit } from '@angular/core';
import { TopCrimesService } from '../top-crimes.service';
import { Crime } from '../crime';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css'],
  providers: [TopCrimesService]
})
export class TopCrimesComponent implements OnInit {

  constructor( private topCrimesService : TopCrimesService) { }

  public crimes: Crime[] =[];

  ngOnInit() {
    this.loadCrimes();
  }

  loadCrimes(){
    this.topCrimesService.getTopCrimes().subscribe(data => this.crimes = data);
  }
}
