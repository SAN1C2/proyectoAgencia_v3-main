import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleProductoComponent } from './components/paquetes/detalle-producto/detalle-producto.component';
import { GaleriaComponent } from './components/paquetes/galeria/galeria.component';
import { DatosComponent } from './components/admin/datos/datos.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PrincipalComponent } from './components/commons/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalle-producto', component: DetalleProductoComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'principal', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
