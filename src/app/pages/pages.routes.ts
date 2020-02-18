import { Routes, RouterModule } from '@angular/router';
import { TemarioComponent } from './temario/temario.component';
import { DirectivasComponent } from './directivas/directivas.component';


const pagesRoutes: Routes = [
    { path: 'temario', component: TemarioComponent, data: { titulo: 'Temario' }  },
    { path: 'directivas', component: DirectivasComponent, data: { titulo: 'Directivas' } },
];

export const PAGES_ROUTES = RouterModule.forRoot( pagesRoutes );



