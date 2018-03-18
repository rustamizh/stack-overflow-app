import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public questions;
  public userQuestions;
  public tagQuestions;

  constructor(private _questionService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }


  // GET QUESTIONS BY OWNER
  public onOwnerClick(id, event) {
    event.preventDefault();

    this._questionService.getUserQuestions(id)
    .subscribe(result => {
      this.userQuestions = result;
      console.log(this.userQuestions);
    });
  }


  // GET QUESTIONS BY TAG
  public onTagClick(id, tag, event) {
    event.preventDefault();

    this._questionService.getTagQuestions(id, tag)
    .subscribe(result => {
      this.tagQuestions = result;
      console.log(this.tagQuestions);
    });
  }


  // GET ALL QUESTIONS BY QUERY
  public getQuestions() {
    this._questionService.getQuestions()
    .subscribe(result => {
      this.questions = result;
      console.log(this.questions);
    });
  }

}
