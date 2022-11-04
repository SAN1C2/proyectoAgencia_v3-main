import { Injectable } from '@angular/core';
import { Packet } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class PacketDataService {

  packet: Packet[] = [
    {
      idPacket: 1,
      imge: "/assets/img/machupicchu.jpg",
      nombreDestino: "Machupicchu",
      descripcion: ' A unos 100 kilómetros al sureste de Cusco, Perú, existe un arcoíris hecho montaña.',
      tiempo: "Full Day",
      precioDestino: 550
    },
    
    {
      idPacket: 2,
      imge: "/assets/img/sagrado.jpg",
      nombreDestino: "Valle Sagrado",
      descripcion: " Abarca la parte de la cuenca del rio Vilcanota entre las poblaciones de Písac y Ollantaytambo.",
      tiempo: "Full Day",
      precioDestino: 320
    },

    {
      idPacket: 3,
      imge: "/assets/img/arcoiris.jpg",
      nombreDestino: "Montaña Arco Iris",
      descripcion: " Se trata de la montaña de los Siete Colores, también conocida como Vinicunca o Arcoíris.",
      tiempo: "12 horas",
      precioDestino: 350
    },

    {
      idPacket: 4,
      imge: "/assets/img/laguna.jpg",
      nombreDestino: "Laguna Humantay",
      descripcion: " Situado a una hora y media a pie de la comunidad de Soraypampa, al noreste de la ciudad de Cusco.",
      tiempo: "12 horas",
      precioDestino: 410
    },

    {
      idPacket: 5,
      imge: "/assets/img/ollantaytambo.jpg",
      nombreDestino: "Ollantaytambo",
      descripcion: " Se cree que su construcción fue orientada en dirección hacia la ciudad del Cusco.",
      tiempo: "10 horas",
      precioDestino: 330
    },

    {
      idPacket: 6,
      imge: "/assets/img/cusco.jpg",
      nombreDestino: "Ciudad del Cusco",
      descripcion: " Capital arqueológica de América, ciudad principal del Imperio Inca, considerada como 'Ombligo del mundo'",
      tiempo: "4 horas",
      precioDestino: 250
    }
  ];

  //**************************************************************************************************/
  //PAQUETES PARA EL CARRITO

  carrito: Packet [] = [];
  
  agregarPags(paque: Packet): void {
    this.packet.push(paque);
  }

  //**************************************************************************************************/
  //**************************************************************************************************/

  constructor() { }
}
