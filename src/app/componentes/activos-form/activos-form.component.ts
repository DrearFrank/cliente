import { Component, OnInit, HostBinding } from '@angular/core';
import { Activo } from 'src/app/models/Activos';
import { ActivosService } from 'src/app/services/activos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-activos-from',
  templateUrl: './activos-form.component.html',
  styleUrls: ['./activos-form.component.css']
})
export class ActivosFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  activo: Activo = {
    id_activos: 0,
    id_categoria:0 ,
    nombre: '',
    descripcion:'' ,
    serie: '',
    cod_utn:'',
    estado: '',
    cantidad: ''
  };

  edit: boolean = false;

  constructor(private activoService: ActivosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id_activos) {
      this.activoService.getActivo(params.id_activos)
        .subscribe(
          res => {
            console.log(res);
            this.activo = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewActivo() {
    delete this.activo.id_activos;
    this.activoService.saveActivo(this.activo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/activos']);
        },
        err => console.error(err)
      )
  }

  updateActivo() {
    this.activoService.updateActivo(this.activo.id_activos, this.activo)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/activos']);
        },
        err => console.error(err)
      )
  }

}
