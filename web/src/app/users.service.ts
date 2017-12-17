import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  API = 'http://localhost:3000'

  constructor(private http: Http) {}

  addUser(name, age) {
    return this.http.post(`${this.API}/users`, {name, age})
  }

  getAllUsers() {
    return this.http.get(`${this.API}/users`)
      .map(res => res.json())
  }
}
