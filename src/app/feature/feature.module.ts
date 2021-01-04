import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [InicioComponent, NosotrosComponent, ContactanosComponent],
  imports: [
    SharedModule
  ]
})
export class FeatureModule { }
