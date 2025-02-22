import { Component } from '@angular/core';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  personajes: any;
  url_next: string = '';

  constructor(private bd: RickymortyServiceService) { 
    //this.cargarPersonajes();
  }

  ngOnInit() {
    //Aqui realizo la carga real de los personajes, despues que toda la pagina
    //ha sido cargada 
    this.cargarPersonajes();
  }


  //El metodo que va a cargar los personajes
  async cargarPersonajes() {
    //this.cargando = true;
    await this.bd
      .getAllPersonajes()
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.personajes = resp.results;

        console.log("MISPERSONAJES", this.personajes);

        this.url_next = resp.info.next;
        console.log("SIGUIENTE", this.url_next);

      });
  }


}
