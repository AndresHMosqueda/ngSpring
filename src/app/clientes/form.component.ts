import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo:string = "Crear Cliente"

  constructor(private clienteService: ClienteService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.cargarCliente();
  }

  update():void {
     this.clienteService.update(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
      })
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( cliente => this.cliente = cliente)
      }
    })
  }
  

   create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente =>  {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')

      }
    )
  }

}
