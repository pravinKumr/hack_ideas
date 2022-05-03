import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitLoginForm = false;
  patternValidation = false;

  constructor (private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      employeeId: ['', [Validators.required]]
    });
  }

  get loginValidator() {
    return this.loginForm.controls;
  }

  // Login
  login(value: string) {
    this.submitLoginForm = true;
    if (this.loginForm.invalid) {
      return;
    } else if (value != '' && 'pravin_kumar001' != value) {
      this.patternValidation = true;
      return;
    } else {
      localStorage.setItem('employeeId', value);
      this.router.navigate(['./challenges']);
      this.patternValidation = false;
      this.submitLoginForm = false;
    }
  }
  // Login End

}
