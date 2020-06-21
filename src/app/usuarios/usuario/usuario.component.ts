import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as actions from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public user: Usuario;
  public error: any;
  public loading = false;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select("usuario").subscribe((state) => {
      this.user = state.user;
      this.loading = state.loading;
      this.error = state.error;
    });
    this.router.params.subscribe(({id}) => {
      this.store.dispatch(actions.cargarUsuario({idUser: id}));
    });
  }

}
