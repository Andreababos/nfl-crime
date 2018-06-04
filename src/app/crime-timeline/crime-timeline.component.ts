import { Component, OnInit } from '@angular/core';
import { CrimeTimelineService } from '../crime-timeline.service';
import { CrimeTime } from '../crime-time';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-crime-timeline',
  templateUrl: './crime-timeline.component.html',
  styleUrls: ['./crime-timeline.component.css']
})
export class CrimeTimelineComponent implements OnInit {

  public crimeTimeline: CrimeTime[] = [];
  public crime: string = 'theft';
  public chart = [];
  constructor(private crimeTimelineService: CrimeTimelineService) { }

  ngOnInit() {
    this.loadCrimeTimeline(this.crime);
  }

  public loadCrimeTimeline(crime){
    this.crimeTimelineService.getCrimeTimeline(crime).subscribe(data=>{
      let arrest_counts = data.map(data => data.arrest_count);
      let dates =  data.map(data => data.Year + '/' + data.Month);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels:dates,
          datasets: [
            { 
              data: arrest_counts,
              borderColor: "#3cba9f",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    })
  }
 
}
