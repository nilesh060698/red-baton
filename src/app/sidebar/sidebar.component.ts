import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories = [];
  features = [];
  Brands = [];
  checked = false;
  activeRadio: any = '';
  brandId = [];
  activeCat: any = '';
  @Output() sidebarData = new EventEmitter<any>();
  constructor( private http: HttpClient) {
    http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/categories').subscribe((res :any) => {
      this.categories = res;
    } );
    http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/features').subscribe((res :any) => {
      this.features = res;
    } )
    http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/brands').subscribe((res :any) => {
      this.Brands = res;
    } )
    
     }

  ngOnInit() {
  }
  categoryHandler() {
    var emitData = {
      'activeCat':this.activeCat,
      'activeFeature':this.activeRadio,
      'brandIds': this.brandId
    }
    this.sidebarData.emit(emitData)
  }
  radioClicked(data) {
    this.activeRadio = data;
    var emitData = {
      'activeCat':this.activeCat,
      'activeFeature':this.activeRadio,
      'brandIds': this.brandId
    }
    this.sidebarData.emit(emitData)
  }
  checkBoxHandler(id) {
    var flag = 0;
    var i = 0;
    for(i = 0 ; i < this.Brands.length; i++) {
      if(this.brandId[i]  == id) {
        this.brandId.splice(i,1);
        flag =1;
        break;
      }
    }
    if(i >= this.Brands.length && flag==0){
      this.brandId.push(id);
    }
    var emitData = {
      'activeCat':this.activeCat,
      'activeFeature':this.activeRadio,
      'brandIds': this.brandId
    }
    this.sidebarData.emit(emitData)
  }
  
  viewAll() {
    var emitData = {
      'activeCat':'',
      'activeFeature':'',
      'brandIds': ''
    }
    this.sidebarData.emit(emitData)
  }

}
