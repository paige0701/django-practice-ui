import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LanguageService} from '../language.service';
import {Page} from '../../common/constant/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']

})
export class CategoryComponent implements OnInit {

  categories;

  searchText: string;

  page_size: number = 5;

  page: Page;

  data: {
    'id': number, 'name': string, 'words' : {'id': number, 'eng': string, 'kor': string, 'esp': string}[]
  };
  randomItem: {'id': number, 'eng': string, 'kor': string, 'esp': string};
  constructor(private activatedRoute: ActivatedRoute,
              private langService: LanguageService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(page: number = 1, search_text?:string) {
    this.langService.getCategories(this.page_size, page, search_text).subscribe((result) => {
      this.categories = result;
      this.page = new Page(result['page']);
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
    this.router.navigateByUrl(`/language/categories/${id}`)
  }

  pageChanged(data) {
    this.page.CURRENT_PAGE = data;
    this.getCategories(this.page.CURRENT_PAGE);
  }

  onSearchEvent(data) {
    this.searchText = data;
    this.getCategories(this.page.CURRENT_PAGE, this.searchText)
  }

}
