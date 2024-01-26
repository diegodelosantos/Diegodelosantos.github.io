import { Routes } from '@angular/router';
import { Vista1Component } from './vistas/vista1/vista1.component';
import { Vista2Component } from './vistas/vista2/vista2.component';
import { Vista3Component } from './vistas/vista3/vista3.component';

export const routes: Routes = [
    {
        path: "vista1",
        component: Vista1Component
    },
    {
        path: "vista2",
        component: Vista2Component
    },
    {
        path: "vista3",
        component: Vista3Component
    },
];
