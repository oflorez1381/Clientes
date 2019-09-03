import {Injectable} from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import {Cliente} from './cliente';
import {of, Observable, throwError} from 'rxjs';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint = 'http://localhost:8081/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpCliente: HttpClient, private router: Router) {
  }

  getClientes(page: number): Observable<any> {
    return this.httpCliente.get<Cliente[]>(this.urlEndpoint + '/page/' + page);
    // return this.httpCliente.get<Cliente[]>(this.urlEndpoint + '/page/' + page).pipe(
    //   tap((response: any) => {
    //     const clientes = response.content as Cliente[];
    //     clientes.forEach(cliente => {
    //       console.log(cliente);
    //     });
    //   }),
    //   map((response: any) => {
    //     const clientes = response.content as Cliente[];
    //     return clientes.map(cliente => {
    //       const datePipe = new DatePipe('en-US');
    //       cliente.nombre = cliente.nombre.toUpperCase();
    //       // cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US');
    //       // cliente.createAt = datePipe.transform(cliente.createAt, 'dd/MM/yyyy');
    //       // cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy');
    //       return cliente;
    //     });
    //   }) ,
      // tap((response: any) => {
      //   const clientes = response.content as Cliente[];
      //   clientes.forEach(cliente => {
      //     console.log(cliente);
      //   });
      // }),
    // );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.httpCliente.post(this.urlEndpoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(err => {
        if (err.status === 400) {
          return throwError(err);
        }
        console.log(err.error.mensaje);
        swal.fire('Error al crear el cliente', err.error.mensaje, 'error');
        return throwError(err);
      })
    );
  }

  getCliente(id: number): Observable<Cliente> {
    return this.httpCliente.get<Cliente>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(err => {
        this.router.navigate(['/clientes']);
        console.error(err.error.message);
        swal.fire('Error al editar', err.error.mensaje, 'error');
        return throwError(err);
      })
    );
  }

  update(cliente: Cliente): Observable<any> {
    return this.httpCliente.put<any>(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(err => {
        if (err.status === 400) {
          return throwError(err);
        }
        console.log(err.error.mensaje);
        swal.fire('Error al editar el cliente', err.error.mensaje, 'error');
        return throwError(err);
      })
    );
  }

  delete(id: number): Observable<Cliente> {
    return this.httpCliente.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(err => {
        console.log(err.error.mensaje);
        swal.fire('Error al eliminar el cliente', err.error.mensaje, 'error');
        return throwError(err);
      })
    );
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('id', id);

    const req = new HttpRequest('POST', `${this.urlEndpoint}/upload`, formData, {
      reportProgress: true
    });

    return this.httpCliente.request(req);
  }
}
