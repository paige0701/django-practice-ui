import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  isPrevDisabled: boolean = false;
  isNextDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
