import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth) {
      return true;
    }

    this.router.navigate(['/auth']);
  }
}
