import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { Vista3Component } from './vista3/vista3.component';
import { Vista4Component } from './vista4/vista4.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { Vista5Component } from './vista5/vista5.component';
import { Vista6Component } from './vista6/vista6.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Vista7Component } from './vista7/vista7.component';
import { ArbolComponent } from './arbol/arbol.component';
import { MatTreeModule } from '@angular/material/tree';
import { SliderConfigurableExampleComponent } from './slider-configurable-example/slider-configurable-example.component';



@NgModule({
  declarations: [
    AppComponent,
    BarralateralComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component,
    Vista4Component,
    FormularioComponent,
    PanelComponent,
    TablaComponent,
    Vista5Component,
    Vista6Component,
    DragdropComponent,
    Vista7Component,
    ArbolComponent,
    SliderConfigurableExampleComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule, 
    MatPaginatorModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, ReactiveFormsModule, MatGridListModule, MatMenuModule, MatTableModule, MatSortModule, DragDropModule, MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
