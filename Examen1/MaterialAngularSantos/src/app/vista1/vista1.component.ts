import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FormularioComponent } from '../formulario/formulario.component';
import { CardsComponent } from '../cards/cards.component';
@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [MatTabsModule, FormularioComponent, CardsComponent],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
