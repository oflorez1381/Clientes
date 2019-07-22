import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpCliente: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(this.urlEndpoint).pipe(
      map( (response) => response as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.httpCliente.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeaders});
  }

  getCliente(id: number): Observable<Cliente> {
    return this.httpCliente.get<Cliente>(`${this.urlEndpoint}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.httpCliente.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  delete(id: number): Observable<Cliente> {
    return this.httpCliente.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
  }
}
