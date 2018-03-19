import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  public answers;
  public requestTimeout: boolean;

  constructor(private _questionService: QuestionsService) { }

  ngOnInit() {
    this.getAnswers();
    this.getRequest();
  }

  getRequest(requestTimeout = false) {
    setTimeout(() => {
      this.requestTimeout = true;
    }, 3000);
  }

  // GET ANSWERS BY QUESTION ID
  public getAnswers() {

    const response = this._questionService.getAnswers();

    if (!response) {
      return;
    }

    response.subscribe(result => {
      this.answers = result;
    });
  }

}
