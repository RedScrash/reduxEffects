import * as actions from '../actions';
import { createReducer, on, State } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}
const initialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

const _usuariosReducer = createReducer(initialState,
    on(actions.cargarUsuarios, (state) => ({...state, loading: true})),
    on(actions.cargarUsuariosSuccess, (state, {usuarios}) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios]
    })),
    on(actions.cargarUsuariosError, (state, {payload}) => ({
        ...state,
        loading: false,
        loaded: true,
        users: payload
    })),
    );

export function usuariosReducer(state, action): UsuariosState {
    return _usuariosReducer(state, action);
}