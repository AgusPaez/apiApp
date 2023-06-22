import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaCategoria, RespuestaMeal } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getMeals(buscar: string) {
    return this.http.get<RespuestaMeal>('https://www.themealdb.com/api/json/v1/1/filter.php?c='+buscar);
  }

  constructor(
    private http : HttpClient
  ) { }

  getCategorias(){ //consultamos a la api y traemos las categorias
    return this.http.get<RespuestaCategoria>('https://www.themealdb.com/api/json/v1/1/categories.php')
  }




}
