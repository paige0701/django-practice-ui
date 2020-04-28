import { Component, OnInit } from '@angular/core';
import {LanguageService} from './language.service';
import {forkJoin} from 'rxjs/index';
import {StringUtil} from '../common/string.util';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  categories;
  records;
  word;
  constructor(private languageService: LanguageService) {


    let fj = {
      'categories': this.languageService.getCategories(),
      'records': this.languageService.getRecords()
    };
    let user = localStorage.getItem('user');
    let today = StringUtil.getTodayDate();
    let word = localStorage.getItem(today + user);

    if (!word) {
      fj['word_of_the_day'] = this.languageService.getWordOfTheDay()
    }

    forkJoin(fj).subscribe((result) => {
      this.categories = result['categories'];
      this.records = result['records'];
      if (result['word_of_the_day']) {
        this.word = result['word_of_the_day'];
        localStorage.setItem(today+user, JSON.stringify(this.word))
      } else {
        this.word = JSON.parse(word)
      }
    })


  }

  ngOnInit(): void {
  }
}
