import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import {map, tap, mergeMap, catchError} from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import {of} from 'rxjs';



@Injectable()

export class UsuarioEffects {
    // Actions esta pendiente de las acciones
    constructor(private _actions$: Actions, private _usuariosService: UsuarioService) {}

    public cargarUsuario$ = createEffect( () => this._actions$.pipe(
            ofType(actions.cargarUsuario),
            mergeMap( (action) => this._usuariosService.getUser(action.idUser).pipe(
                    map( user => actions.cargarUsuarioSuccess({usuario: user})),
                    catchError( err => of(actions.cargarUsuarioError({payload: err.error})))
                )
            )
        )
    );
}
