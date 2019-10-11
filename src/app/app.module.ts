import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './header/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientesComponent } from './clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DirectiveComponent,
    ClientesComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
