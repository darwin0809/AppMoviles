import { Component, Input } from '@angular/core';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';

@Component({
  selector: 'app-episodio-card',
  templateUrl: './episodio-card.component.html',
  styleUrls: ['./episodio-card.component.scss'],
  standalone: false
})
export class EpisodioCardComponent {
  @Input() episodio: any;
  personajes: any[] = [];
  episodioSeleccionado: boolean = false;

  constructor(private rickMortyService: RickymortyServiceService) {}

  async togglePersonajes() {
    if (this.episodioSeleccionado) {
      this.episodioSeleccionado = false;
      this.personajes = [];
      return;
    }

    this.episodioSeleccionado = true;
    this.personajes = [];

    for (const url of this.episodio.characters) {
      try {
        const personaje = await this.rickMortyService.getPersonajeByUrl(url).toPromise();
        this.personajes.push(personaje);
      } catch (error) {
        console.error('Error al cargar personaje:', error);
      }
    }
  }
}
