import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(public usuariosService: UsuarioService) { }

  ngOnInit() {
    this.usuariosService.getUsers().subscribe((result) => {
      console.log(result);
      this.usuarios = result;
    });
  }

}
