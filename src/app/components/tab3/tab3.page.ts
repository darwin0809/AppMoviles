import { Component } from '@angular/core';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  episodios: any[] = [];
  personajes: any[] = [];
  episodioSeleccionado: any = null;

  constructor(private bd: RickymortyServiceService) {}

  ngOnInit() {
    this.cargarEpisodios();
  }

  async cargarEpisodios() {
    try {
      const resp: any = await this.bd.getAllEpisodios().toPromise();
      this.episodios = resp.results;
      console.log('Episodios cargados:', this.episodios);
    } catch (error) {
      console.error('Error al cargar episodios:', error);
    }
  }

  async togglePersonajes(episodio: any) {
    if (this.episodioSeleccionado === episodio) {
      this.episodioSeleccionado = null;
      this.personajes = [];
    } else {
      this.episodioSeleccionado = episodio;
      this.personajes = [];
      for (const url of episodio.characters) {
        try {
          const personaje = await this.bd.getPersonajeByUrl(url).toPromise();
          this.personajes.push(personaje);
        } catch (error) {
          console.error('Error al cargar personaje:', error);
        }
      }
    }
  }
}
