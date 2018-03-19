import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private error;
  public requestTimeout: boolean;
  public questions;
  public userQuestions;
  public tagQuestions;
  public userModalOpen = false;
  public tagModalOpen = false;
  public currentTag;
  public currentOwner;

  constructor(private _questionService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
    this.getRequest();
  }

  tagModalToggle() {
    this.tagModalOpen = !this.tagModalOpen;

    document.body.style.overflow = this.tagModalOpen ? 'hidden' : 'auto';
  }

  userModalToggle() {
    this.userModalOpen = !this.userModalOpen;

    document.body.style.overflow = this.userModalOpen ? 'hidden' : 'auto';
  }


  getRequest(requestTimeout = false) {
    setTimeout(() => {
      this.requestTimeout = true;
    }, 3000);
  }


  // GET QUESTIONS BY OWNER
  public onOwnerClick(owner, event) {
    event.preventDefault();

    this.currentOwner = owner.display_name;

    this._questionService.getUserQuestions(owner.user_id)
    .subscribe(result => {
      this.userQuestions = result;
      this.userModalToggle();
    });
  }


  // GET QUESTIONS BY TAG
  public onTagClick(id, tag, event) {
    event.preventDefault();

    this.currentTag = tag;

    this._questionService.getTagQuestions(id, tag)
    .subscribe(result => {
      this.tagQuestions = result;
      this.tagModalToggle();
    });
  }


  // GET ALL QUESTIONS BY QUERY
  public getQuestions() {
    const response = this._questionService.getQuestions();

    if (!response) {
      return;
    }

    response.subscribe(
      result => {
      this.questions = result;
    });
  }

  // GET ANSWERS BY QUESTION ID
  public getAnswers(id) {
    this._questionService.getAnswers(id);
  }

}
