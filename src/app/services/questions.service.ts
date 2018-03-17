import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  private questions;

  constructor(private _http: HttpClient) { }

  public getQuestions(query?) {
    if (!query) {
      return this.questions;
    }

    // tslint:disable-next-line:max-line-length
    this.questions = this._http.get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + query + '&site=stackoverflow');

    console.log(typeof this.questions);
  }

}
