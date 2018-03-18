import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { AnswersComponent } from './answers/answers.component';
import { QuestionsService } from './services/questions.service';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'answers', component: AnswersComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
