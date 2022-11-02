import { Component, OnInit } from '@angular/core';
import { MyWeatherLibService } from './my-weather-lib.service';

@Component({
  selector: 'mwl-my-weather-lib',
  template: `
    <h2>Weater Info</h2>
    <p>Weater in:{{ weather.name }}</p>
    <p>Temperature: {{ weather.main.temp }}</p>
  `,
  styles: [],
})
export class MyWeatherLibComponent implements OnInit {
  weather: any;

  constructor(private weatherService: MyWeatherLibService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherUpdates().subscribe((res: any) => {
      console.log(res);
      this.weather = res;
    });
  }
}
