import { Component } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { DireccionComponent } from '../direccion/direccion.component';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [TablaComponent, DireccionComponent],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
