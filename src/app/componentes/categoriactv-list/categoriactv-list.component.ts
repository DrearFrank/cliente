import { Component, OnInit, HostBinding  } from '@angular/core';

import { CategoriactvService } from '../../services/categoriactv.service';
import { Categoriactv } from 'src/app/models/categoriactv';

@Component({
  selector: 'app-categoriactv-list',
  templateUrl: './categoriactv-list.component.html',
  styleUrls: ['./categoriactv-list.component.scss']
})
export class CategoriactvListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cateactivos: any = [];

  constructor(private categoriactvService: CategoriactvService) { }


  ngOnInit() {
    this.getCategoriactvs();
  }

  getCategoriactvs() {
    this.categoriactvService.getCategactvs()
      .subscribe(
        res => {
          this.cateactivos = res;
        },
        err => console.error(err)
      );
  }

  deleteCategoriactv(id: string) {
    this.categoriactvService.deleteCategactv(id)
      .subscribe(
        res => {
          console.log(res);
          this.getCategoriactvs();
        },
        err => console.error(err)
      )
  }

}
