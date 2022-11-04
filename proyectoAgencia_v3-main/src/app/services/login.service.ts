import { Injectable } from '@angular/core';
import { Login } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: Login[] = [
    {
      id: '001',
      user: 'pepee1920',
      password: '123456',
    },
    {
      id: '002',
      user: 'sanic',
      password: 'sanic123',
    }
  ]

  usuarioActivo: Login | undefined = undefined;
  
  constructor() { }

  usuarioVacio(): Login {
    return {
      id: "0",
      user: "",
      password: ""
    };
  }

  validarUsuario(user: string, password: string): boolean {
    const users: Login | undefined = this.usuario.find(usr => {
      return (usr.user === user && usr.password === password );
    });
    if (users === undefined) {
      console.log('Intento fallido');
      this.usuarioActivo = undefined;
      return false;
    }
    this.usuarioActivo = users;
    console.log('Usuario encontrado: ');
    console.log(this.usuarioActivo);
    return true;
  }
}