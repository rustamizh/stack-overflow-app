import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _questionService: QuestionsService) {

  }

  private result;

  onSearch(query) {
    this._questionService.getQuestions(query);
  }

  ngOnInit() {
  }

}
