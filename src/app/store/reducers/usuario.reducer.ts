import * as actions from '../actions';
import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsuarioState {
    id: string
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}
const initialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,
};

const _usuarioReducer = createReducer(initialState,
    on(actions.cargarUsuario, (state, {idUser}) => ({
        ...state, loading: true, id: idUser
    })),
    on(actions.cargarUsuarioSuccess, (state, {usuario}) => ({
        ...state,
        loading: false,
        loaded: true,
        user: usuario
    })),
    on(actions.cargarUsuarioError, (state, {payload}) => ({
        ...state,
        loading: false,
        loaded: true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
    );

export function usuarioReducer(state, action): UsuarioState {
    return _usuarioReducer(state, action);
}