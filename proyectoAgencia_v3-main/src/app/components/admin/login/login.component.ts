import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router"
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string = "";
  password: string = "";

  @Output() login = new EventEmitter();

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(): void {
    if (this.LoginService.validarUsuario(this.user, this.password)) {
      this.login.emit();
      this.router.navigate(['/principal']);
    }
    else {
      alert("Usuario o contraseña errados");
    }
  }
}
