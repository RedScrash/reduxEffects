import {createAction, props} from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] cargar usuarios');
export const cargarUsuariosSuccess = createAction('[Usuarios] cargar usuarios correctamente', props<{usuarios: Usuario[]}>());
export const cargarUsuariosError = createAction('[Usuarios] cargar usuarios error', props<{payload: any[]}>());
