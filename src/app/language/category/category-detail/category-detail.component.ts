import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../language.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  data;

  constructor(private activatedRoute: ActivatedRoute,
              private langService: LanguageService) {
    this.activatedRoute.params.subscribe((result) => {
      this.langService.getWordsByCategory(result['id']).subscribe((result) => {
        this.data = result;
      })
    })
  }

  ngOnInit(): void {
  }

}
