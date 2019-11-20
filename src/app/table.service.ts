import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  getUsers()
  {
      return this.http.get('http://localhost:3001/users');
  }
  constructor() { }
}
