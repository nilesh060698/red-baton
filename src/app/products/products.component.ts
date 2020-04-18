import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  @Input() products: [];
  constructor(private _router:Router) {
  }

  ngOnInit() {
  }
routeHandler(product,index) {
  this._router.navigate(['product'],{queryParams:{'id': product.id, 'index':index }});
}

}
