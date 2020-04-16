import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.createForm()
  }

  validation_messages = {
    'email': [
      { type: 'required', message: '필수 입력 항목입니다' },
    ],
    'password': [
      { type: 'required', message: '필수 입력 항목입니다' },
    ]
  };

  ngOnInit(): void {
  }

  onClickLogin() {

    if (!this.loginForm.valid) {
      console.info(this.loginForm)
    }

    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.userService.loginUser(email, password).subscribe((result) => {
      localStorage.setItem('token', result['token']);
      localStorage.setItem('user', result['full_name']);
      this.router.navigateByUrl('/home')
    }, error1 => {
      alert('failed to login')
    })
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', {
        updateOn: 'submit',
        validators: Validators.compose([
          Validators.required
        ])
      }),
      password: new FormControl('', {
        updateOn: 'submit',
        validators: Validators.compose([
          Validators.required
        ])
      })
    })
  }

}
