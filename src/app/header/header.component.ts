import { AuthService } from './../services/auth/auth.service';
import { User } from './../models/user.model';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService : UserService,
              private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
    }

}
