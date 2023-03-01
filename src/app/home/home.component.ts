import { Component } from '@angular/core';
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  resume = '/assets/josh_patino_resume_ng.png'; 

  downloadResume(){
    const blob = new Blob([this.resume], {type: 'application/pdf'});
    saveAs(blob, "josh-patino-resume.pdf");
  }


}