import { Component, Input ,OnInit } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-guardado-galeria',
  templateUrl: './guardado-galeria.component.html',
  styleUrls: ['./guardado-galeria.component.scss']
})
export class GuardadoGaleriaComponent implements OnInit {

  @Input() viajes: Packet[] = [];
  pags: string[] = [];

  constructor(private storeService: StoreService) {
    console.log("guardado.galeria.component.constructor - " + this.viajes.length);
     
   }

  ngOnInit(): void {
    console.log("guardado.galeria.component.ngoinit - " + this.viajes.length);
  }

  seleccionar(tour: Packet): void {
    this.storeService.agregarPags(tour);
    console.log(this.pags);
  }
}
