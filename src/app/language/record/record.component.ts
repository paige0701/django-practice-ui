import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../language.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  data;

  constructor(private languageService: LanguageService,
              private router:Router) { }

  ngOnInit(): void {
    this.getRecords()
  }

  getRecords() {
    this.languageService.getRecords().subscribe((result) => {
      this.data = result;
    })
  }

  onClickRecord(id: string) {
    this.router.navigateByUrl(`/language/records/${id}`)
  }

}
