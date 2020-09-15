import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home-page/home.component';
import {MoviePageComponent} from './components/movie-page/movies.component';
import {CreatePageComponent} from './components/create-page/create-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'movies', component: MoviePageComponent },
  {path: 'create', component: CreatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
