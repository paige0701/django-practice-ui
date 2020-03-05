import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createUserForm

  constructor(private formBuilder: FormBuilder) {
    this.createUserForm = this.formBuilder.group({
      email: '',
      full_name: ''
    })
  }

  ngOnInit(): void {
  }

}
