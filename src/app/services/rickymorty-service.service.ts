import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RM } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickymortyServiceService {

  constructor(private http: HttpClient) { }

  // Obtener todos los personajes
  getAllPersonajes(): any {
    const url = `${URL_RM}/character`;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RK', res);
        return res;
      })
    );
  }

  // Obtener todos los episodios
  getAllEpisodios(): any {
    const url = `${URL_RM}/episode`;
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log('EPISODIOS_RK', res);
        return res;
      })
    );
  }

  // Obtener un personaje por URL
  getPersonajeByUrl(url: string): any {
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log('PERSONAJE_RK', res);
        return res;
      })
    );
  }
  getMasPersonajes(url: string) {
    return this.http.get(url).pipe(
      map((res: any) => {
        console.log("Cargando más personajes:", res);
        return res;
      })
    );
  }
  
  getMasEpisodios(url: string) {
    return this.http.get(url);
  }
}
