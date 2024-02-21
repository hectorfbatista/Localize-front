import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Titulo {
  _id: number;
  name: string;
  amount: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TitulosService {

  constructor(private httpClient: HttpClient) { }

  getTitulos() {
    return this.httpClient.get('http://localhost:3000/titles');
  }

  excluirTitulo(id: number) {
    return this.httpClient.delete(`http://localhost:3000/titles/${id}`);
  }

  criarTitulo(titulo: Titulo) {
    return this.httpClient.post('http://localhost:3000/titles', titulo);
  }

  alugarTitulo(titulo: Titulo, clienteId: number) {
    return this.httpClient.put(`http://localhost:3000/titles/alugar/${titulo._id}`, titulo);
  }

  devolverTitulo(titulo: Titulo, clienteId: number) {
    return this.httpClient.put(`http://localhost:3000/titles/devolver/${titulo._id}`, titulo);
  }
}