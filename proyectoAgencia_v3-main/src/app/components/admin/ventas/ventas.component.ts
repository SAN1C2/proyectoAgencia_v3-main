import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  validarLogin: boolean = this.LoginService.usuarioActivo !== undefined;

  constructor(private LoginService:LoginService) { }

  ngOnInit(): void {
  }

}
