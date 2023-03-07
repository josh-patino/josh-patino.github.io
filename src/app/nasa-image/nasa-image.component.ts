import { Component, OnDestroy } from '@angular/core';
import { NasaImageService } from '../nasa-image.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nasa-image',
  templateUrl: './nasa-image.component.html',
  styleUrls: ['./nasa-image.component.scss']
})
export class NasaImageComponent {
constructor(private NasaImageService: NasaImageService, private datePipe: DatePipe){}

nasaData: any; 
nasaExplanation: string = 'loading';
url: any; 
nasaTitle: string = '';
_copyright: string = ''; 
nasaDate: any = '';


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
      this.url = this.nasaData.url; 
      this._copyright = this.nasaData.copyright; 
      const date = this.nasaData.date; 
      this.nasaDate = this.datePipe.transform(date, 'MMMM d, YYYY');      
    }
  })
}

}
