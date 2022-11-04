import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {Packet as Packet} from 'src/app/model/admin.model';
import { PacketDataService } from 'src/app/services/packet-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent implements OnInit {

  validarLogin: boolean = this.LoginService.usuarioActivo !== undefined;

  constructor(private packetDataService: PacketDataService, public modalService: BsModalService, private LoginService:LoginService) { 
    this.packet = packetDataService.packet;
  }

  modalRef?: BsModalRef;
  posicionEditar:number = 0;

  openModal(template: TemplateRef<any>, position:number) {
    this.modalRef=this.modalService.show(template);
    this.posicionEditar=position;
    this.id=this.packet[this.posicionEditar].idPacket;
    this.imagen=this.packet[this.posicionEditar].imge;
    this.destino=this.packet[this.posicionEditar].nombreDestino;
    this.descripcion=this.packet[this.posicionEditar].descripcion;
    this.tiempo=this.packet[this.posicionEditar].tiempo;
    this.precio=this.packet[this.posicionEditar].precioDestino;
  }
  
  id: number = 0;
  imagen: string = "";
  destino: string = "";
  descripcion: string = "";
  tiempo: string = "";
  precio: number = 0;

  paqueteGuardar(): void{
    
    const replace: any ={
      idPacket: this.id,
      imge: this.imagen,
      nombreDestino: this.destino,
      descripcion: this.descripcion,
      tiempo: this.tiempo,
      precioDestino: this.precio
    }
    
    this.packet.splice(this.posicionEditar,this.id,replace);
    this.id=0;
    this.imagen="";
    this.destino="";
    this.descripcion="";
    this.tiempo="";
    this.precio=0;
  }
  
  paqueteNuevo(): void {
    const newPacket ={
      idPacket: this.id,
      imge: this.imagen,
      nombreDestino: this.destino,
      descripcion: this.descripcion,
      tiempo: this.tiempo,
      precioDestino: this.precio
    }

    this.packet.push(newPacket);
    this.id = 0;
    this.imagen="";
    this.destino = "";
    this.descripcion="";
    this.tiempo = "";
    this.precio=0;
  }
  
  packet: Packet[] = [

  ];

  ngOnInit(): void {
  }

}
