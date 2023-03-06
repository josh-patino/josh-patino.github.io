import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ErrorComponent } from './error/error.component';
import { WeatherComponent } from './weather/weather.component';
import { NasaImageComponent } from './nasa-image/nasa-image.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'nasa-image', component:NasaImageComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: ErrorComponent}


]; //where we will add components to route 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
