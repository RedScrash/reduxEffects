import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import {map, tap, mergeMap, catchError} from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import {of} from 'rxjs';



@Injectable()

export class UsuariosEffects {
    // Actions esta pendiente de las acciones
    constructor(private _actions$: Actions, private _usuariosService: UsuarioService) {}

    public cargarUsuarios$ = createEffect( () => this._actions$.pipe(
            ofType(actions.cargarUsuarios),
            mergeMap( () => this._usuariosService.getUsers().pipe(
                    map( users => actions.cargarUsuariosSuccess({usuarios: users})),
                    catchError( err => of(actions.cargarUsuariosError({payload: err.error})))
                )
            )
        )
    );
}
