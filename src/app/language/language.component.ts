import { Component, OnInit } from '@angular/core';
import {LanguageService} from './language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  categories;
  constructor(private languageService: LanguageService) {
    this.languageService.getCategories().subscribe((result) => {
      this.categories = result;
    })
  }

  ngOnInit(): void {
  }
}
