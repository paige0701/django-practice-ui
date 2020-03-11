import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor() { }

  categories = [{'id': 1, 'label': 'Numbers'},
    {'id': 2, 'label': 'Months / Seasons / weather'},
    {'id': 3, 'label': 'Countries'},
    {'id': 4, 'label': 'Fruits / vegetables'},
    {'id': 5, 'label': 'Drinks / Food'},
    {'id': 6, 'label': 'Shapes / Colours'}];
  ngOnInit(): void {
  }
}
