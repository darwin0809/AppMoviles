import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.scss'],
  standalone: false
})
export class PersonajeListComponent implements OnInit {


  @Input() personajes: any[] = [];
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';


  constructor() { }


  ngOnInit() { }


}

