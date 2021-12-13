import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;

  constructor(private userService: UserService) { }

  checkAut(username, password){
    const user = this.userService.user;

    return new Promise(
      (res, rej) => {
        if(user.username === username && user.password === password){
          this.signIn(res);
        }
        rej('Le couple email/password ne correspond pas !')
      }
    )
  }

  signIn(res) {
    this.isAuth = true;
    res();
  }

  signOut() {
    this.isAuth = false;
  }
}
