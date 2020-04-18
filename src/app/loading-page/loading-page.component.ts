import { Component ,OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {
  title = 'red Baton';
  products: any = [];
  filteredData: any = [];
  constructor( private http: HttpClient,private router:Router ,private route: ActivatedRoute) {
    http.get('https://my-json-server.typicode.com/banshilaldangi/ecommerce/products').subscribe((res :any) => {
      this.products = res;
      this.filteredData = this.products.slice();
    } )
     }
     filterData(event){
       
      if(event.activeCat == '') {
        this.filteredData = [];
              if(event.activeFeature !='' && event.brandIds !=[]) {
                for(let i = 0;i< this.products.length;i++) {
                  if(this.products[i].id == event.activeFeature) {
                      for (let j = 0;j < event.brandIds.length;j++) {
                        if(this.products[i].brand_id == event.brandIds[j]) {
                          this.filteredData.push(this.products[i]);
                        }
                      }
                    }
                }
              } 
              if(event.activeFeature =='' && event.brandIds !=[]) {
                for(let i = 0;i< this.products.length;i++) {
                      for (let j = 0;j < event.brandIds.length;j++) {
                        if(this.products[i].brand_id == event.brandIds[j]) {
                          this.filteredData.push(this.products[i]);
                        }
                      }
                    }
              }
              if(event.activeFeature !='' && event.brandIds ==[]) {
                for(let i = 0;i< this.products.length;i++) {
                  if(this.products[i].id == event.activeFeature) {
                          this.filteredData.push(this.products[i]);
                        }
                      }
                    }
      }    
        if(event.activeFeature == '') {
          this.filteredData = [];
        if(event.activeCat !='' && event.brandIds !=[]) {
          for(let i = 0;i< this.products.length;i++) {
            if(this.products[i].category_id == event.activeCat) {
                for (let j = 0;j < event.brandIds.length;j++) {
                  if(this.products[i].brand_id == event.brandIds[j]) {
                    this.filteredData.push(this.products[i]);
                  }
                }
              }
          }
        } 
        if(event.activeCat =='' && event.brandIds !=[]) {
          for(let i = 0;i< this.products.length;i++) {
                for (let j = 0;j < event.brandIds.length;j++) {
                  if(this.products[i].brand_id == event.brandIds[j]) {
                    this.filteredData.push(this.products[i]);
                  }
                }
              }
        }
        if(event.activeCat !='' && event.brandIds ==[]) {
          for(let i = 0;i< this.products.length;i++) {
            if(this.products[i].category_id == event.activeCat) {
                    this.filteredData.push(this.products[i]);
                  }
                }
              }
}    


if(event.brandIds == '') {
  this.filteredData = [];
  if(event.activeFeature !='' && event.activeCat !='') {
    for(let i = 0;i< this.products.length;i++) {
      if(this.products[i].id == event.activeFeature && this.products[i].category_id == event.activeCat) {
              this.filteredData.push(this.products[i]);
        }
    }
  } 
  if(event.activeFeature =='' && event.activeCat !='') {
    for(let i = 0;i< this.products.length;i++) {
      if(this.products[i].category_id == event.activeCat) {
              this.filteredData.push(this.products[i]);
      }

        }
  }
  if(event.activeFeature !='' && event.activeCat == '') {
    for(let i = 0;i< this.products.length;i++) {
      if(this.products[i].id == event.activeFeature) {
              this.filteredData.push(this.products[i]);
            }
          }
        }
}  
   if(event.activeCat != '' && event.activeFeature !='' && event.brandIds != []) {
     this.filteredData = [];
    for(let i = 0;i< this.products.length;i++) {
      if(this.products[i].id == event.activeFeature && 
        this.products[i].category_id == event.activeCat) {
           for (let j = 0;j < event.brandIds.length;j++) {
             if(this.products[i].brand_id == event.brandIds[j]) {
               this.filteredData.push(this.products[i]);
             }
           }
        }
    }
   }
   if(event.activeCat == '' && event.activeFeature =='' && event.brandIds == []) {
     this.filteredData = this.products.slice();
   }


     }
     ngOnInit() {
    }

}
