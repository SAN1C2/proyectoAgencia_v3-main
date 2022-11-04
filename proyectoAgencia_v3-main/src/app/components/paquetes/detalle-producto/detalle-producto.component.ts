import { Component, OnInit } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';
import { StoreService } from 'src/app/services/store.service'

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  pags: Packet[] = [];

  constructor(private storeService: StoreService) { 
    this.pags = storeService.carrito;
  }

  eliminarPaquete(posicion: number): void {
    this.pags.splice(posicion, 1)
  }

  ngOnInit(): void {
  }

}


