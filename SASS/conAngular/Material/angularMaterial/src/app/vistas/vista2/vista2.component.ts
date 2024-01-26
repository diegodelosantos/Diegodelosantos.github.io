import { Component } from '@angular/core';
import { DireccionComponent } from '../direccion/direccion.component';

@Component({
  selector: 'app-vista2',
  standalone: true,
  imports: [DireccionComponent],
  templateUrl: './vista2.component.html',
  styleUrl: './vista2.component.scss'
})
export class Vista2Component {

}
