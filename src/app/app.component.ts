import { Component, OnInit } from '@angular/core';
import { CamareroService } from './services/camarero.service';
import { Camarero } from './model/camarero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 //inicialmente undefined hasta que lleguen los datos
  camareros:Camarero[] = undefined;

   constructor(private camareoService:CamareroService){
   } 
  ngOnInit(): void {

    this.camareoService.getAll().subscribe(datos => {

      console.log(datos);
      //aquí ya han llegado los datos
      this.camareros = datos;
      
    });


  }
  
}
