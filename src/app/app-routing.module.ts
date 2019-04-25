import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'details', component: DogDetailsComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
