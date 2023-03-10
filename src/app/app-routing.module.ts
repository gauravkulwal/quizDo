import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  {path: '' , redirectTo:'home' , pathMatch:'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'quiz/:subject' , component: QuizComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
