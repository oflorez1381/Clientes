import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private abierto = false;

  constructor() { }

  abrirModal() {
    this.abierto = true;
  }
  cerrarModal() {
    this.abierto = false;
  }
  estaAbierto(): boolean {
    return this.abierto;
  }
}
