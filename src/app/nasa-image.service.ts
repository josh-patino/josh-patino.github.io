import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaImageService {

  constructor(private http: HttpClient) { }

  getNasa(){
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=lsSWUATjfTH2Rj5ZstDFYTGfFyNR9OMfXPoQlZDf');
  }
}
