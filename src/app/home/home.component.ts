import { Component } from '@angular/core';
import {saveAs} from 'file-saver';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: '<button (click)="downloadResume()">Download my Resume</button>', 
})
export class HomeComponent {
  constructor(public http: HttpClient ){
  }
  

  downloadResume(){
    const PDF_PATH = '/assets/Josh_Patino_ng_copy.pdf';
    const PDF_NAME = 'josh_patino_resume.pdf';

    this.http.get(PDF_PATH, { responseType: 'blob' }).subscribe((blob: Blob) => {
      saveAs(blob, PDF_NAME);
    });
  }

}