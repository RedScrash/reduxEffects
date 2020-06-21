import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _url = 'https://reqres.in/api';

  constructor(private _http: HttpClient) { }

  public getUsers() {
    return this._http.get(`${this._url}/users?per_page=6&delay=3`).pipe(map(
      result => result['data']
    ));
  }

  public getUser(id: string) {
    return this._http.get(`${this._url}/users/${id}`).pipe(map(
      result => result['data']
    ));
  }
}
