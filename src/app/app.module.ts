import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './header/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './cliente.service';

const routes: Routes = [
{path: '', redirectTo: '/clientes', pathMatch: 'full'},
{path: 'directives', component: DirectiveComponent},
{path: 'clientes', component: ClientesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DirectiveComponent,
    ClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
