import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {



  clientes : Cliente[] = [
    { id: 1, nombre: 'Andres', apellido: 'Guzman', email: 'profko@sesee.com', createAt: '2017-12-12'},
    { id: 2, nombre: 'Andre', apellido: 'Guzmlremlrmran', email: 'proferr4443@sesee.com', createAt: '2017-04-12'},
    { id: 3, nombre: 'Aasddasd', apellido: 'aad', email: 'pr44@sesee.com', createAt: '2017-02-12'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
