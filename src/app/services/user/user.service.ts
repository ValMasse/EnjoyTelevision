import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() { 
    this.user = new User('Administrateur', 'azerty');
  }
}
