import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './header/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
{path: '', redirectTo: '/clientes', pathMatch: 'full'},
{path: 'directives', component: DirectiveComponent},
{path: 'clientes', component: ClientesComponent},
{path: 'clientes/form',  component: FormComponent},
{path: 'clientes/form/:id',  component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DirectiveComponent,
    ClientesComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
