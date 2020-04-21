import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-nav',
  templateUrl: './detail-nav.component.html',
  styleUrls: ['./detail-nav.component.css']
})
export class DetailNavComponent implements OnInit {

  constructor(private router : Router) { }

  @Input()
  title: string;

  ngOnInit(): void {

  }

  onClickBack() {
    if (this.title && this.title == 'Categories'){
      this.router.navigateByUrl('/language')
    }
  }

  onSubmit() {
    // search list
    console.info('submit')
  }

}
