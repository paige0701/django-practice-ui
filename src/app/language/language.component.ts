import { Component, OnInit } from '@angular/core';
import {LanguageService} from './language.service';
import {forkJoin} from 'rxjs/index';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  categories;
  records;
  constructor(private languageService: LanguageService) {
    forkJoin({
      'categories': this.languageService.getCategories(),
      'records': this.languageService.getRecords()
    }).subscribe((result) => {
      this.categories = result['categories'];
      this.records = result['records'];
    })
  }

  ngOnInit(): void {
  }
}
