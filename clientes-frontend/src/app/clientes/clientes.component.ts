import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  private clientes: Cliente[];
  private paginador: any;
  clienteSeleccionado: Cliente;

  constructor(private clienteService: ClienteService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.clienteService.getClientes().subscribe(
    //   clientes => this.clientes = cliente
    // );
    // this.activatedRoute.paramMap.subscribe(params => {
    //   let page = +params.get('page');
    //
    //   if (!page) {
    //     page = 0;
    //   }
    //
    //   this.clienteService.getClientes(page).pipe(
    //       tap(response => {
    //         this.clientes = response.content as Cliente[];
    //         this.paginador = response;
    //       })
    //     ).subscribe();
    //   });
  }

//    "sweetalert2": "^7.26.9",

  delete(cliente: Cliente): void {

    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(response => {
          this.clientes = this.clientes.filter(cli => cli !== cliente);
          swalWithBootstrapButtons.fire(
            'Cliente Eliminado!',
            `Cliente ${cliente.nombre} eliminado exitosamente.`,
            'success'
          );
        });
      }
    });
  }

  abrirModal(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
  }
}
