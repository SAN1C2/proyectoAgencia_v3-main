import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Login } from 'src/app/model/admin.model';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class MenuComponent implements OnInit {

  validarLogin: boolean = this.LoginService.usuarioActivo !== undefined;

  @Output() cerrarSesion = new EventEmitter();

  constructor(private LoginService:LoginService) {
    
  }

  user: Login[] = [

  ];

  ngOnInit(): void {
  }

  actualiza(): void {
    this.validarLogin = this.LoginService.usuarioActivo !== undefined;
  }

  salir(): void {
    this.LoginService.usuarioActivo = undefined;
    this.cerrarSesion.emit();
  }

}
