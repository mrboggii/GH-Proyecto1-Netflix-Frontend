import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';


const routes: Routes = [
  {path:"", redirectTo: "moviesDisplay", pathMatch:"full"},
  {path:"moviesDisplay", component:MoviesDisplayComponent},
  {path:"login", component:LoginComponent}
  {path: "perfil", }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

