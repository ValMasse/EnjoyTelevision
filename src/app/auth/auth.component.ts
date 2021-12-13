import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorMsg: string;

  authForm:FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._initForm();
  }

  _initForm(){
    this.authForm = this.formBuilder.group({
      'username':['', [Validators.required]],
      'password':['', Validators.required]
    });

  }

  onSignIn(){
    const username = this.authForm.value.username;
    const password = this.authForm.value.password;

    this.authService.checkAut(username, password)
    .then(
      (res) => {
        this.router.navigate(['dramas']);
      },
      (err) => {
        this.errorMsg = err;
      }
    )
  }

}
