import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../language.service';

@Component({
  selector: 'app-recored-detail',
  templateUrl: './recored-detail.component.html',
  styleUrls: ['./recored-detail.component.css']
})
export class RecoredDetailComponent implements OnInit {

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
