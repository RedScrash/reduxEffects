import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _url = 'https://reqres.in/api';

  constructor(private _http: HttpClient) { }

  public getUsers() {
    return this._http.get(`${this._url}/users?per_page=6`).pipe(map(
      result => result['data']
    ));
  }
}
