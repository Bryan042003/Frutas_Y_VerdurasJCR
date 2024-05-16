import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductosFrutasComponent } from './productos-frutas/productos-frutas.component';
import { ProductosVerdurasComponent } from './productos-verduras/productos-verduras.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    HeaderComponent,
    CarouselComponent,
    ProductosFrutasComponent,
    ProductosVerdurasComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
