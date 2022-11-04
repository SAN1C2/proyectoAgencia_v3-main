import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';
import { StoreService } from 'src/app/services/store.service';
import { PacketDataService } from 'src/app/services/packet-data.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  paquetes: Packet[] = [
  ];

  ngOnInit(): void {
  }

  @Input() paquete: Packet = {
    idPacket: 0,
    imge: "",
    nombreDestino: "" ,
    descripcion: "",
    tiempo: "",
    precioDestino: 0,
  };

  @Output() pressAgregarP = new EventEmitter();

  constructor(private PacketDataService: PacketDataService) { 
    this.paquetes = PacketDataService.packet;
    console.log("galeria.component.ts - " + this.paquetes.length);
  }

  clickAgregarP(tour: string): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregarP.emit(tour);
  }

  eliminarPaquete(posicion: number): void {
    this.paquetes.splice(posicion, 1)
  }
}
