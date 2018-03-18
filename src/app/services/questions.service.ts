import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  private questions;
  private userQuestions;
  private tagQuestions;

  constructor(private _http: HttpClient) { }

  public getQuestions(query?) {

    if (!query) {
      return this.questions;
    }

    const URL = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + query + '&site=stackoverflow';

    this.questions = this._http.get(URL);
  }



  public getUserQuestions(id) {
    const URL = 'http://api.stackexchange.com/2.2/users/' + id + '/questions?order=desc&sort=activity&site=stackoverflow';

    this.userQuestions = this._http.get(URL);

    return this.userQuestions;
  }

  public getTagQuestions(id, tag) {

    const URL = 'http://api.stackexchange.com/2.2/users/' + id + '/tags/' + tag + '/top-questions?order=desc&sort=activity&site=stackoverflow';

    this.tagQuestions = this._http.get(URL);

    return this.tagQuestions;
  }

}
