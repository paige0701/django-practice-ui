import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getUserName() {
    return localStorage.getItem('user')
  }

  isLoggedIn() {
    return localStorage.getItem('token')
  }

  onClickLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home')
  }

}
