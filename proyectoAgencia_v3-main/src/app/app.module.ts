import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgxNavbarModule } from 'ngx-bootstrap-navbar'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/commons/menu/menu.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { DatosComponent } from './components/admin/datos/datos.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { GaleriaComponent } from './components/paquetes/galeria/galeria.component';
import { GuardadoGaleriaComponent } from './components/paquetes/guardado-galeria/guardado-galeria.component';
import { FormatoGaleriaComponent } from './components/paquetes/formato-galeria/formato-galeria.component';
import { DetalleProductoComponent } from './components/paquetes/detalle-producto/detalle-producto.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PrincipalComponent } from './components/commons/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DatosComponent,
    VentasComponent,
    PaquetesComponent,
    GaleriaComponent,
    GuardadoGaleriaComponent,
    FormatoGaleriaComponent,
    DetalleProductoComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxNavbarModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
