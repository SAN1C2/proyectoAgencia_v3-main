import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';

@Component({
  selector: 'app-formato-galeria',
  templateUrl: './formato-galeria.component.html',
  styleUrls: ['./formato-galeria.component.scss']
})
export class FormatoGaleriaComponent implements OnInit {

  @Input() paquete: Packet = {
    idPacket: 0,
    imge: "",
    nombreDestino: "" ,
    descripcion: "",
    tiempo: "",
    precioDestino: 0,
  };
  
  @Output() pressAgregarP = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickAgregarP(tour: Packet): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregarP.emit(tour);
  }

}
