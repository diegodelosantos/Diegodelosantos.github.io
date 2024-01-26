import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { DireccionComponent } from './vistas/direccion/direccion.component';
import { TablaComponent } from './vistas/tabla/tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarraLateralComponent, DireccionComponent,TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularMaterial';
}
