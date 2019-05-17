import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivosFormComponent } from './componentes/activos-form/activos-form.component';



import { OrdenadoresFormComponent} from './componentes/ordenadores-form/ordenadores-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path:'activos',component: ActivosFormComponent },
  //{path: 'games/add',    component: GameFormComponent},
  //{path: 'games/edit/:id',    component: GameFormComponent}
  {path:'ordenadores',component: OrdenadoresFormComponent }
  //{path: 'games/add',    component: GameFormComponent},
  //{path: 'games/edit/:id',    component: GameFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
