import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: false
})
export class Page2Page implements OnInit {
  id!: number;
  personaje: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bd: RickymortyServiceService) {
    // Aquí nos suscribimos a los parámetros de la ruta para extraer el `id`
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log("IDPERSONAJE_COMP", this.id); // Asegúrate de que esto esté mostrando el valor correcto

      // Llamamos a la API solo si el `id` es válido
      if (this.id) {
        this.cargarUnPersonaje();
      } else {
        console.error("ID no válido.");
      }
    });
  }

  async cargarUnPersonaje() {
    // Asegúrate de que el `id` se pase correctamente
    await this.bd
      .geUnPersonaje(this.id)
      .toPromise()
      .then((resp: any) => {
        this.personaje = resp;
        console.log("MIPERSONAJEPAGE", this.personaje);
      })
      .catch((error: any) => {
        console.error("Error al cargar el personaje", error);
      });
  }

  ngOnInit() {
  }
}
