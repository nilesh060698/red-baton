import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product ={};
  products = []
  constructor(private http:HttpClient,private route: ActivatedRoute) {
    http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/products').subscribe((res :any) => {
      this.products = res;
      this.route.queryParams.subscribe(val => {
        this.product = this.products[parseInt(val['index'])];
      
    } )
   });
  }

  ngOnInit() {
  }

}
