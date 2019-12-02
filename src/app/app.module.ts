import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';// necesario para rest
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamareroService } from './services/camarero.service';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,    AppRoutingModule
  ],
  providers: [CamareroService,ClienteService,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
