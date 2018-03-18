import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  public answers;

  constructor(private _questionService: QuestionsService) { }

  ngOnInit() {
    this.getAnswers();
  }

  // GET ANSWERS BY QUESTION ID
  public getAnswers() {
    this._questionService.getAnswers()
    .subscribe(result => {
      this.answers = result;
      console.log(this.answers);
    });
  }

}
