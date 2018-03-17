import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public questions;

  constructor(private _questionService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  public getQuestions() {
    this._questionService.getQuestions()
    .subscribe(result => {
      this.questions = result;
      console.log(this.questions);
    }
  );
  }

}
