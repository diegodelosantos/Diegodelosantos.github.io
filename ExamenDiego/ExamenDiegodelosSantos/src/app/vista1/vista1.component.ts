import { Component } from '@angular/core';
import { ArrastrarSoltarComponent } from './arrastrar-soltar/arrastrar-soltar.component';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [ArrastrarSoltarComponent],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
