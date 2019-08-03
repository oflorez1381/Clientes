import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo = 'Crear cliente';
  private errores: string[];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.cargarCliente();
  }


  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.clienteService.getCliente(id).subscribe(
          cliente => this.cliente = cliente
        );
      }
    });
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo Cliente', `${cliente.nombre} ha sido creado con exito!`, 'success');
      }, err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo de error: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo Cliente', `${response.mensaje} : ${response.cliente.nombre}`, 'success');
      }, err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo de error: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }
}
