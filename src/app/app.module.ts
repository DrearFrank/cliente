import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FooterComponent } from './nav/footer/footer.component';
import { SlidenavComponent } from './nav/slidenav/slidenav.component';
import { NavComponent } from './nav/nav/nav.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ActivosListComponent } from './componentes/activos-list/activos-list.component';
import { ActivosFormComponent } from './componentes/activos-form/activos-form.component';
import { CarreraListComponent } from './componentes/carrera-list/carrera-list.component';
import { CarreraFormComponent } from './componentes/carrera-form/carrera-form.component';
import { CategoriactvListComponent } from './componentes/categoriactv-list/categoriactv-list.component';
import { CategoriactvFormComponent } from './componentes/categoriactv-form/categoriactv-form.component';
import { CategoriaEqElectricoListComponent } from './componentes/categoria-eq-electrico-list/categoria-eq-electrico-list.component';
import { CategoriaEqElectricoFormComponent } from './componentes/categoria-eq-electrico-form/categoria-eq-electrico-form.component';
import { CicloAcademicoListComponent } from './componentes/ciclo-academico-list/ciclo-academico-list.component';
import { CicloAcademicoFormComponent } from './componentes/ciclo-academico-form/ciclo-academico-form.component';
import { DocentesListComponent } from './componentes/docentes-list/docentes-list.component';
import { DocentesFormComponent } from './componentes/docentes-form/docentes-form.component';
import { EqElectricoListComponent } from './componentes/eq-electrico-list/eq-electrico-list.component';
import { EqElectricoFormComponent } from './componentes/eq-electrico-form/eq-electrico-form.component';
import { EspaciosListComponent } from './componentes/espacios-list/espacios-list.component';
import { EspaciosFormComponent } from './componentes/espacios-form/espacios-form.component';
import { HorarioClaseListComponent } from './componentes/horario-clase-list/horario-clase-list.component';
import { HorarioClaseFormComponent } from './componentes/horario-clase-form/horario-clase-form.component';
import { MantenimientoListComponent } from './componentes/mantenimiento-list/mantenimiento-list.component';
import { MantenimientoFormComponent } from './componentes/mantenimiento-form/mantenimiento-form.component';
import { MarcaOrdeListComponent } from './componentes/marca-orde-list/marca-orde-list.component';
import { MarcaOrdeFormComponent } from './componentes/marca-orde-form/marca-orde-form.component';
import { OrdenadorListComponent } from './componentes/ordenador-list/ordenador-list.component';
import { OrdenadoresFormComponent} from './componentes/ordenadores-form/ordenadores-form.component';
import { PersonasListComponent } from './componentes/personas-list/personas-list.component';
import { PersonasFormComponent } from './componentes/personas-form/personas-form.component';
import { RegClaseListComponent } from './componentes/reg-clase-list/reg-clase-list.component';
import { RegClaseFormComponent } from './componentes/reg-clase-form/reg-clase-form.component';
import { RegPrestamoListComponent } from './componentes/reg-prestamo-list/reg-prestamo-list.component';
import { RegPrestamFormComponent } from './componentes/reg-prestam-form/reg-prestam-form.component';
import { RegReservasListComponent } from './componentes/reg-reservas-list/reg-reservas-list.component';
import { RegReservasFormComponent } from './componentes/reg-reservas-form/reg-reservas-form.component';
import { SoftwareListComponent } from './componentes/software-list/software-list.component';
import { SoftwareFormComponent } from './componentes/software-form/software-form.component';
import { TipoEspacioListComponent } from './componentes/tipo-espacio-list/tipo-espacio-list.component';
import { TipoEspacioFormComponent } from './componentes/tipo-espacio-form/tipo-espacio-form.component';
import { TipoManteniListComponent } from './componentes/tipo-manteni-list/tipo-manteni-list.component';
import { TipoManteniFormComponent } from './componentes/tipo-manteni-form/tipo-manteni-form.component';
import { UbicacionActivoListComponent } from './componentes/ubicacion-activo-list/ubicacion-activo-list.component';
import { UbicacionActivoFormComponent } from './componentes/ubicacion-activo-form/ubicacion-activo-form.component';
import { UbicacionEqElecListComponent } from './componentes/ubicacion-eq-elec-list/ubicacion-eq-elec-list.component';
import { UbicacionEqElecFormComponent } from './componentes/ubicacion-eq-elec-form/ubicacion-eq-elec-form.component';
import { UbicacionOrdenaListComponent } from './componentes/ubicacion-ordena-list/ubicacion-ordena-list.component';
import { UbicacionOrdenaFormComponent } from './componentes/ubicacion-ordena-form/ubicacion-ordena-form.component';


import {ActivosService} from './services/activos.service';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SlidenavComponent,
    NavComponent,
    ActivosListComponent,
    ActivosFormComponent,
    CarreraListComponent,
    CarreraFormComponent,
    CategoriactvListComponent,
    CategoriactvFormComponent,
    CategoriaEqElectricoListComponent,
    CategoriaEqElectricoFormComponent,
    CicloAcademicoListComponent,
    CicloAcademicoFormComponent,
    DocentesListComponent,
    DocentesFormComponent,
    EqElectricoListComponent,
    EqElectricoFormComponent,
    EspaciosListComponent,
    EspaciosFormComponent,
    HorarioClaseListComponent,
    HorarioClaseFormComponent,
    MantenimientoListComponent,
    MantenimientoFormComponent,
    MarcaOrdeListComponent,
    MarcaOrdeFormComponent,
    OrdenadorListComponent,
    OrdenadoresFormComponent,
    PersonasListComponent,
    PersonasFormComponent,
    RegClaseListComponent,
    RegClaseFormComponent,
    RegPrestamoListComponent,
    RegPrestamFormComponent,
    RegReservasListComponent,
    RegReservasFormComponent,
    SoftwareListComponent,
    SoftwareFormComponent,
    TipoEspacioListComponent,
    TipoEspacioFormComponent,
    TipoManteniListComponent,
    TipoManteniFormComponent,
    UbicacionActivoListComponent,
    UbicacionActivoFormComponent,
    UbicacionEqElecListComponent,
    UbicacionEqElecFormComponent,
    UbicacionOrdenaListComponent,
    UbicacionOrdenaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule 
  ],
  providers: [
   ActivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
