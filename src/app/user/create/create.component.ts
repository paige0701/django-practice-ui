import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {timer} from 'rxjs/index';
import {switchMap} from 'rxjs-compat/operator/switchMap';
import {map} from 'rxjs/internal/operators';
import {UserService} from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createUserForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.info(data)
  }

  createForm() {
    this.createUserForm = this.formBuilder.group({
      email: new FormControl('', {
        updateOn: 'blur',
        validators: Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])
      }),
      full_name: ['', {updateOn: 'blur', validators : [
        ]}
      ],
      password: new FormControl('', {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.pattern(/(^[0-9].*(?=[0-9a-zA-Z\.]{2,19}$)(?=.*\d?)(?=.*[a-zA-Z])(?=.*[\.]?).*$)|(^[a-zA-Z].*(?=[0-9a-zA-Z\.]{2,19}$)(?=.*\d?)(?=.*[a-zA-Z]?)(?=.*[\.]?).*$)/),
          ]
        }
      ),
      password_confirm: new FormControl('', {
          updateOn: 'blur',
          validators: [
            Validators.required,
          ]
        }
      ),
    })
  }

}
