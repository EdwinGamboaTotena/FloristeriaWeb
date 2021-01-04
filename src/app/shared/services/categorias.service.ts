import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Categoria } from '../models/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public categorias: Categoria[];

  constructor(private http: HttpClient) {
    this.categorias = [];
    this.cargarData();
  }

  private cargarData(): void {
    this.cargarCategorias().subscribe((data: Categoria[]) => this.categorias = data);
  }

  private cargarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('assets/data/categorias.json');
  }

}
