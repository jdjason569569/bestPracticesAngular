import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackByComponent } from './track-by/track-by.component';

const routes: Routes = [
  {
    path: 'trackBy', component : TrackByComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
