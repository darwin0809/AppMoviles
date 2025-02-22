import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeListComponent } from './personaje-list/personaje-list.component';
import { PersonajeCardComponent } from './personaje-card/personaje-card.component';
import { EpisodioListComponent } from './episodio-list/episodio-list.component';
import { EpisodioCardComponent } from './episodio-card/episodio-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PersonajeListComponent,
    PersonajeCardComponent,
    EpisodioListComponent,
    EpisodioCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule

  ],
  exports:[
    PersonajeListComponent,
    PersonajeCardComponent,
    EpisodioListComponent,
    EpisodioCardComponent
  ]
})
export class ElementsModule { }
