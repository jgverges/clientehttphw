import { Component, OnInit } from '@angular/core';
import { CamareroService } from './services/camarero.service';
import { Camarero } from './model/camarero';
import { Cliente } from './model/cliente';
import { ClienteService } from './services/cliente.service';
import { Producto } from './model/producto';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 //inicialmente undefined hasta que lleguen los datos
  camareros:Camarero[] = undefined;
  clientes:Cliente[] = undefined;
  productos:Producto[] = undefined;

  constructor(private camareoService:CamareroService,
              private clienteService:ClienteService,
              private productoService:ProductoService){
  }
   
   
  ngOnInit(): void {

    this.camareoService.getAll().subscribe(datos => {
          //aquí ya han llegado los datos
      this.camareros = datos;
    });

    this.clienteService.getAll().subscribe(datos => {
      this.clientes = datos;
    });     
    
    this.productoService.getAll().subscribe(datos =>{
      this.productos = datos;
    });
  


  }
  
}
