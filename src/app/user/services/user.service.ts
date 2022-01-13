import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    return this.http.get(environment.apiUrl + 'users');
  }

  getUserById(id: number) {
    return this.http.get(environment.apiUrl + 'users/' + id);
  }
}
