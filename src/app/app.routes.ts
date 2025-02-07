import { Routes } from '@angular/router';
import { descripcionComponent} from './descripcion/descripcion.component';
import { cuidadosComponent } from './cuidados/cuidados.component';
import { Top5Component} from './top5/top5.component';

export const routes: Routes = [
    {path:"descripcion",component:descripcionComponent},
    {path:"cuidados",component:cuidadosComponent},
    {path:"top5", component:Top5Component}
];
