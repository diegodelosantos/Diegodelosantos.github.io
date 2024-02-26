import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardFancyExample } from './card1/card.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';




@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatCardActions, MatCardHeader, MatCardContent, MatCardTitle],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.scss'
})
export class Vista1Component {

}
