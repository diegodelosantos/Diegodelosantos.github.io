import { Routes } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';

export const routes: Routes = [
    {
        path: "Principal",
        component: Vista1Component
    },
    {
        path: "Registro",
        component: Vista2Component
    }
];
