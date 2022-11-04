import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  validarLogin: boolean = this.LoginService.usuarioActivo !== undefined;

  constructor(private LoginService:LoginService) { }

  ngOnInit(): void {
  }
}
