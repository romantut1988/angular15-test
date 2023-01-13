import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  ProceedLogin(inputdata: any) {
    return this.http.post(
      'https://mockapi.io/projects/63c0f171376b9b2e64700afc',
      inputdata
    );
  }
  IsLoogedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') != null
      ? localStorage.getItem('token')
      : '';
  }

  Registeration(inputdata: any) {
    return this.http.post(
      'https://mockapi.io/projects/63c0f171376b9b2e64700afc',
      inputdata
    );
  }
}
