import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ArrastrarSoltarComponent } from '../vista1/arrastrar-soltar/arrastrar-soltar.component';
import { FormularioComponent } from '../vista2/formulario/formulario.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-barra-laterial',
  templateUrl: './barra-laterial.component.html',
  styleUrl: './barra-laterial.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    ArrastrarSoltarComponent,
    FormularioComponent,
    RouterOutlet
    
  ]
})
export class BarraLaterialComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
