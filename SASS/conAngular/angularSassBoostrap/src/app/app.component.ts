import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CaedComponent } from './componentes/card/caed.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TablasComponent } from './componentes/vistas/tablas/tablas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CaedComponent, FooterComponent, TablasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularSassBoostrap';
}
