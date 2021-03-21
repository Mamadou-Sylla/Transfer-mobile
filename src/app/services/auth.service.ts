import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient, private router: Router) {
  }

  private baseUrl = 'http://127.0.0.1:8000/api';
  public nameAutorization = 'fil-rouge-back';
  public localStorage  = window.localStorage;

  login(credentials: any): any{
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  getToken(credentials: any): any{
    this.login(credentials).subscribe(
      (    token: { token: string; })  => {
        localStorage.clear();
        localStorage.setItem('token', token.token);
        console.log(token.token);

        let user = this.decodeToken();
        user = this.decodeToken();
        console.log(user.roles);

        const role = user.roles[0];
        console.log(role);
        if (user){
          this.redirectByRole(user.roles[0]);
        }
        // this.router.navigate(['/default/admin']);
      },
      (    httpError: { error: { message: any; }; }) => console.log(httpError.error.message)
    );
  }


  myToken(): any {

    // console.log(localStorage.getItem('token'));

    return localStorage.getItem('token');
  }

  decodeToken(): any{
    return  localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token') as string) : null;
  }



// tslint:disable-next-line:typedef
  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_AdminSysteme': {
        this.router.navigate(['admin']);
        break;
      }
      case 'ROLE_AdminAgence': {
        this.router.navigate(['admin']);
        // @ts-ignore
        break;
      }
      case 'ROLE_Caissier': {
        // @ts-ignore
        this.router.navigate(['admin']);
        break;
      } case 'ROLE_UserAgence': {
        // @ts-ignore
        this.router.navigate(['user']);
        break;
      }
      default: {
        this.router.navigate(['admin']);
        break;
      }
    }


  }
// tslint:disable-next-line:typedef
  isLoggenIn(){
    return !!localStorage.getItem('token');
  }

// tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
    // @ts-ignore
    console.log(localStorage.getItem('token'));
    this.router.navigate(['/home']);
  }
}
