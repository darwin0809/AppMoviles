import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  episodios: any[] = [];
  url_next: string | null = null;

  constructor(private bd: RickymortyServiceService) {}

  ngOnInit() {
    this.cargarEpisodios();
  }

  async cargarEpisodios() {
    try {
      const resp: any = await firstValueFrom(this.bd.getAllEpisodios());
      this.episodios = resp.results;
      this.url_next = resp.info.next;

      console.log("Episodios iniciales cargados:", this.episodios);
      console.log("Siguiente página:", this.url_next);
    } catch (error) {
      console.error("Error al cargar los episodios:", error);
    }
  }

  async cargarEpisodiosSiguientes(event?: InfiniteScrollCustomEvent) {
    if (!this.url_next) {
      event?.target.complete();
      return;
    }

    try {
      const resp: any = await firstValueFrom(this.bd.getMasEpisodios(this.url_next));
      this.episodios.push(...resp.results);
      this.url_next = resp.info.next; // Actualizamos la URL de la siguiente página

      console.log("Más episodios cargados:", resp.results);
      console.log("Nueva siguiente página:", this.url_next);
    } catch (error) {
      console.error("Error al cargar más episodios:", error);
    }

    event?.target.complete();
  }

  onIonInfinite(event: any) {
    this.cargarEpisodiosSiguientes(event);
  }
}
