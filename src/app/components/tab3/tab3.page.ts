import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  personajes: any[] = [];
  url_next: string | null = null;

  constructor(private bd: RickymortyServiceService, private router: Router) {}

  ngOnInit() {
    this.cargarPersonajes();
  }

 
  async cargarPersonajes() {
    try {
      const resp: any = await firstValueFrom(this.bd.getAllPersonajes());
      this.personajes = resp.results;
      this.url_next = resp.info.next;

      console.log("Personajes iniciales cargados:", this.personajes);

      if (this.url_next) {
        console.log('Hay más personajes por cargar');
      }
    } catch (error) {
      console.error("Error al cargar los personajes:", error);
    }
  }

  
  async cargarMasPersonajes(event?: InfiniteScrollCustomEvent) {
    if (!this.url_next) {
      event?.target.complete();
      return;
    }

    try {
      const resp: any = await firstValueFrom(this.bd.getMasPersonajes(this.url_next));
      this.personajes.push(...resp.results);
      this.url_next = resp.info.next;

      console.log("Más personajes cargados:", resp.results);
    } catch (error) {
      console.error("Error al cargar más personajes:", error);
    }

    event?.target.complete();
  }

  onIonInfinite(event: any) {
    this.cargarMasPersonajes(event);
  }

  verPersonaje(id: number) {
    this.router.navigate(['/personaje', id]);
  }
}
