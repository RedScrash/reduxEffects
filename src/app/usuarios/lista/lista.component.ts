import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(private _store: Store<AppState>, private usuariosService: UsuarioService) { }

  ngOnInit() {
    this._store.select('usuarios').subscribe( state => {
      this.usuarios = state.users;
    });
    this._store.dispatch(actions.cargarUsuarios());
    // this.usuariosService.getUsers().subscribe((result) => {
    //   console.log(result);
    //   this.usuarios = result;
    // });

  }

}