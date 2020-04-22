import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']

})
export class CategoryComponent implements OnInit {

  categories;

  data: {
    'id': number, 'name': string, 'words' : {'id': number, 'eng': string, 'kor': string, 'esp': string}[]
  };
  randomItem: {'id': number, 'eng': string, 'kor': string, 'esp': string};
  constructor(private activatedRoute: ActivatedRoute,
              private langService: LanguageService,
              private router: Router) {
    // this.activatedRoute.params.subscribe((result) => {
    //   this.langService.getWordsByCategory(result['id']).subscribe((result) => {
    //     this.data = result;
    //     this.onClickNext();
    //   })
    // })
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.langService.getCategories().subscribe((result) => {
      this.categories = result;
    })
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

  onClickCategory(id: number) {
    console.info('clicked')
    this.router.navigateByUrl(`/language/categories/${id}`)
  }

}
