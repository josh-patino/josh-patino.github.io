import { Component, OnDestroy } from '@angular/core';
import { NasaImageService } from '../nasa-image.service';

@Component({
  selector: 'app-nasa-image',
  templateUrl: './nasa-image.component.html',
  styleUrls: ['./nasa-image.component.scss']
})
export class NasaImageComponent {
constructor(private NasaImageService: NasaImageService){}

nasaData: any; 
date: string = '';
nasaExplanation: string = 'loading';
url: any; 
nasaTitle: string = '';

ngOnInit(): void {
  this.getNasaData(); 
}

private getNasaData(){

  this.NasaImageService.getNasa().subscribe({
    next:(result)=> {
      console.log(result);
      this.nasaData = result; 
      this.nasaTitle = this.nasaData.title; 
      this.nasaExplanation = this.nasaData.explanation; 
      this.url = this.nasaData.hdurl; 
    }
  })
}

}
