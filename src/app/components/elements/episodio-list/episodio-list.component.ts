import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episodio-list',
  templateUrl: './episodio-list.component.html',
  styleUrls: ['./episodio-list.component.scss'],
  standalone: false
})
export class EpisodioListComponent {
  @Input() episodios: any[] = [];
}
