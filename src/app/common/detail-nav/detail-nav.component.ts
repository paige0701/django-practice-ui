import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-nav',
  templateUrl: './detail-nav.component.html',
  styleUrls: ['./detail-nav.component.css']
})
export class DetailNavComponent implements OnInit {

  constructor(private router : Router,
              private location: Location) { }

  @Input()
  title: string;

  ngOnInit(): void {

  }

  onClickBack() {
    this.location.back();
  }

  onSubmit() {
    // search list
    console.info('submit')
  }

}
