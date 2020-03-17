import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  data: {
    'id': number, 'name': string, 'words' : {'id': number, 'eng': string, 'kor': string, 'esp': string}[]
  };
  randomItem: {'id': number, 'eng': string, 'kor': string, 'esp': string};
  constructor(private activatedRoute: ActivatedRoute,
              private langService: LanguageService) {
    this.activatedRoute.params.subscribe((result) => {
      this.langService.getWordsByCategory(result['id']).subscribe((result) => {
        this.data = result;
        this.onClickNext();
      })
    })
  }

  ngOnInit(): void {
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  onClickNext() {
    const temp = this.data.words[this.getRandomNumber(0, this.data.words.length)];
    if (this.randomItem && this.randomItem.eng === temp.eng) {
      this.onClickNext()
    } else {
      this.randomItem = temp
    }

  }

}
