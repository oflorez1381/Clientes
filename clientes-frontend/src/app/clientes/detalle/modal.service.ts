import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private abierto = false;

  // tslint:disable-next-line:variable-name
  private _notificarUpload = new EventEmitter<any>();

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
  get notificarUpload(): EventEmitter<any> {
    return this._notificarUpload;
  }
}
