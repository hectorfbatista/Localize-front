import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Clientes {
  name: string;
  id: number;
  tel: string;
  email: string;
  _id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  getClientes() {
    return this.httpClient.get('http://localhost:3000/clients')
  }

  excluirCliente(id: number) {
    return this.httpClient.delete(`http://localhost:3000/clients/${id}`);
  }

  criarCliente(cliente: Clientes) {
    return this.httpClient.post('http://localhost:3000/clients', cliente);
  }
}