import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  constructor(private weatherService:WeatherService, private datePipe: DatePipe){}
  //variables for the api call 
  myWeather: any; //any data type
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  windSpeed:number = 0;
  windGust: number = 0;
  minTemp: number = 0;
  maxTemp: number = 0;
  summary: string = '';
  iconURL: string = '';
  cityName: string = '';
  city: string = 'St. Louis';
  units: string = 'imperial'; 
  sunRiseSeconds: number = 0;
  sunriseTime: any ='';
  sunSetSeconds: number = 0;
  sunsetTime: any = '';
  
  

  ngOnInit(): void {
    this.getWeatherData(this.city); 
  }

  onSubmit(){
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city:string){
    this.weatherService.getWeather(this.city, this.units).subscribe({
      next:(result)=> {
        console.log(result); 
        this.myWeather = result; 
        this.myWeather = result; 
        console.log(this.myWeather)
        this.cityName = this.myWeather.name;
        this.temperature = Math.round(this.myWeather.main.temp);
        this.feelsLikeTemp=Math.round(this.myWeather.main.feels_like);
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;  
        this.iconURL = 'http://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon+'@2x.png';
        this.windSpeed = Math.round(this.myWeather.wind.speed);
        this.windGust = Math.round(this.myWeather.wind.gust); 
        this.minTemp = Math.round(this.myWeather.main.temp_min);
        this.maxTemp = Math.round(this.myWeather.main.temp_max); 
        this.sunRiseSeconds = this.myWeather.sys.sunrise;
        this.sunSetSeconds = this.myWeather.sys.sunset;
        console.log(this.sunRiseSeconds);
        //date pip for sunrise, and sunset
        const sunrise = new Date(this.sunRiseSeconds * 1000);
        this.sunriseTime = this.datePipe.transform(sunrise, 'h:mm a');
        const sunset = new Date(this.sunSetSeconds * 1000); //1000 to go to ms, what dataPipe needs
        this.sunsetTime = this.datePipe.transform(sunset, 'h:mm a'); 
      }
    })
  }
}


