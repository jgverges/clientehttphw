import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  
  getAll():Observable<Producto[]>{

    return this.http.get<Producto[]>("https://pedi-gest.herokuapp.com/api/productos");
  }
}
