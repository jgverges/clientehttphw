import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private htttp:HttpClient) { }

  getAll():Observable<Cliente[]>{

    return this.htttp.get<Cliente[]>("https://pedi-gest.herokuapp.com/api/clientes");
  }
}
