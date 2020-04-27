import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  @ViewChild('searchInput')
  searchInput: ElementRef;

  @Output()
  searchEvent = new EventEmitter();

  ngOnInit(): void {

  }

  onClickBack() {
    this.location.back();
  }

  onSubmit() {
    // search list
    this.searchEvent.emit(this.searchInput.nativeElement.value)
  }

}
