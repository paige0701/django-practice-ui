import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data: {
    'id': number, 'name': string, 'words' : {'id': string, 'eng': string, 'kor': string, 'esp': string}[]
  };
  randomItem: {'id': string, 'eng': string, 'kor': string, 'esp': string};
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((result) => {
      switch (result['id'].toString()) {
        case '1':
          this.showNumbers();
          break;
        case '2':
          this.showMonths();
          break;

      }
    })
  }

  ngOnInit(): void {
  }

  showNumbers() {
    console.info('numbers')
  }

  showMonths() {
    this.data = {
      'id': 2,
      'name': 'Months',
      'words': [
        {'id': 'mo-1', 'eng': 'January', 'kor': '1월', 'esp': 'enero'},
        {'id': 'mo-2', 'eng': 'February', 'kor': '2월', 'esp': 'febrero'},
        {'id': 'mo-2', 'eng': 'March', 'kor': '3월', 'esp': 'marzo'}
      ]
    }
    this.randomItem = this.data.words[this.getRandomNumber(0, this.data.words.length)]
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  onClickNext() {
    const temp = this.data.words[this.getRandomNumber(0, this.data.words.length)];
    if (this.randomItem.eng === temp.eng) {
      this.onClickNext()
    } else {
      this.randomItem = temp
    }

  }

}
