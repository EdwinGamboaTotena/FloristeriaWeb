import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactanosComponent } from './feature/contactanos/contactanos.component';
import { InicioComponent } from './feature/inicio/inicio.component';
import { NosotrosComponent } from './feature/nosotros/nosotros.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
