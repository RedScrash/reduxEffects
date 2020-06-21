import {createAction, props} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction('[Usuario] cargar Usuario', props<{idUser: string}>());
export const cargarUsuarioSuccess = createAction('[Usuario] cargar Usuario correctamente', props<{usuario: Usuario}>());
export const cargarUsuarioError = createAction('[Usuario] cargar Usuario error', props<{payload: any}>());
